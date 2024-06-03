import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setSuccessMessage, setErrorMessage} from '../store/slices/navbarSlice';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profile: '',
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { successMessage, errorMessage } = useSelector(state => state.navbar);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/signup', formData)
      .then(res => {
        console.log("Success", res);
        dispatch(setSuccessMessage('User created successfully'));
        setFormData({
          profile: '',
          name: '',
          email: '',
          mobile: '',
          password: '',
        });
        setTimeout(() => {
          navigate('/'); 
        }, 2000);
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          dispatch(setErrorMessage(err.response.data.message));
        } else {
          dispatch(setErrorMessage('An error occurred. Please try again.'));
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-white bg-red-400">
                  <h3 className="text-3xl font-semibold">Create a Matrimony Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-4">
                {errorMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                      <span className="block sm:inline">{errorMessage}</span>
                    </div>
                  )}
                  {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                      <span className="block sm:inline">{successMessage}</span>
                    </div>
                  )}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-1">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Create Profile For</label>
                        <select
                          id="profile"
                          name="profile"
                          className="bg-gray-50 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          required
                          onChange={handleChange}
                          value={formData.profile}
                        >
                          <option value="">Select</option>
                          <option value="Self">Self</option>
                          <option value="Son">Son</option>
                          <option value="Daughter">Daughter</option>
                          <option value="Brother">Brother</option>
                          <option value="Sister">Sister</option>
                          <option value="Relative/Friend">Relative/Friend</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="bg-gray-50 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Full Name"
                          required
                          onChange={handleChange}
                          value={formData.name}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="bg-gray-50 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Mobile Number</label>
                        <input
                          type="text"
                          id="mobile"
                          name="mobile"
                          className="bg-gray-50 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Mobile Number"
                          required
                          onChange={handleChange}
                          value={formData.mobile}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Create Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Password"
                          required
                          onChange={handleChange}
                          value={formData.password}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-gray-800 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                      Register
                    </button>
                  </form>
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
