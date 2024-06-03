const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
require('dotenv').config();

const stripe = Stripe(process.env.SECRET_KEY);
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const plans = {
  silver: 5000 * 100,
  gold: 9000 * 100,
  diamond: 17000 * 100
};

app.post('/signup', (req, res) => {
  const { profile, name, email, mobile, password } = req.body;
  const checkEmailSql = "SELECT * FROM signup WHERE email = ?";
  const checkMobileSql = "SELECT * FROM signup WHERE mobile = ?";
  const insertUserSql = "INSERT INTO signup (`profile`, `name`, `email`, `mobile`, `password`) VALUES (?, ?, ?, ?, ?)";

  db.query(checkEmailSql, [email], (err, emailResult) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (emailResult.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      db.query(checkMobileSql, [mobile], (err, mobileResult) => {
        if (err) {
          console.error('Error checking mobile:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }

        if (mobileResult.length > 0) {
          return res.status(400).json({ message: "Mobile number already exists" });
        } else {
          const hashedPassword = bcrypt.hashSync(password, 10);
          db.query(insertUserSql, [profile, name, email, mobile, hashedPassword], (err, data) => {
            if (err) {
              console.error('Error inserting user:', err);
              return res.status(500).json({ message: 'Internal server error' });
            }
            return res.status(201).json({ message: "User created successfully" });
          });
        }
      });
    }
  });
});

app.post('/login', (req, res) => {
  const { emailOrPhone, password } = req.body;
  console.log('Login request received:', { emailOrPhone, password });

  if (emailOrPhone && password) {
    const checkUserSql = 'SELECT * FROM signup WHERE email = ? OR mobile = ?';
    db.query(checkUserSql, [emailOrPhone, emailOrPhone], (error, results) => {
      if (error) {
        console.error('Error checking user:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length > 0) {
        const user = results[0];
        console.log('User found:', user);

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.error('Error comparing passwords:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }

          if (isMatch) {
            req.session.loggedin = true;
            req.session.email = emailOrPhone;
            console.log('Login successful for:', emailOrPhone);
            return res.status(200).json({ message: 'Login successful', name: user.name });
          } else {
            console.log('Incorrect password for:', emailOrPhone);
            return res.status(401).send('Incorrect Username and/or Password!');
          }
        });
      } else {
        console.log('User not found with email or phone:', emailOrPhone);
        return res.status(401).send('Incorrect Username and/or Password!');
      }
    });
  } else {
    console.log('Email or password not provided');
    res.status(400).send('Please enter Username and Password!');
  }
});

app.post('/create-checkout-session', async (req, res) => {
  const { plan } = req.body;
  console.log('Received plan:', plan);

  if (!plans[plan]) {
    console.error('Invalid plan:', plan);
    return res.status(400).send('Invalid plan');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
            },
            unit_amount: plans[plan],
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    console.log('Checkout session created:', session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    console.log('Logout successful');
    res.status(200).json({ message: 'Logout successful' });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
