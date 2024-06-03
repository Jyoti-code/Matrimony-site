import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (emailOrPhone, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { emailOrPhone, password });
      setUser({ name: response.data.name });
      console.log("user name",response.data.name)
    } catch (error) {
      console.error('Login error:', error);
      setUser(null); 
      throw error; 
    }
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
