import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showModal, setShowModal] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/login', { emailOrPhone, password })
      .then(res => {
        console.log("Login successful", res.data);
        localStorage.setItem('userName', res.data.name);
        setShowModal(false);
        navigate('/'); 
      })
      .catch(err => {
        console.error('Login error:', err.response);
        if (err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t text-white bg-red-400">
                  <h3 className="text-3xl font-semibold">Login To Continue</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-4">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-1">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">
                          Email ID / Phone Number
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={emailOrPhone}
                          onChange={(e) => setEmailOrPhone(e.target.value)}
                          className="bg-gray-50 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-gray-800 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                      Sign in
                    </button>
                  </form>
                  {errorMessage && (
                    <div className="mt-4 text-red-500">
                      {errorMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
