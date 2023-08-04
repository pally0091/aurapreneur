/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <div className="w-full lg:w-1/2 mx-auto mt-20 bg-rose-200 p-6 text-black shadow-md shadow-slate-400 rounded-md opacity-50 backdrop-blur-sm">
      <h3 className="text-2xl font-semibold text-center">Please Login Here</h3>
      <div className="my-4 px-10 ">
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              className="w-full bg-gray-300 p-3 rounded-md focus:outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              className="w-full bg-gray-300 p-3 rounded-md focus:outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-24 mx-auto mt-10">
            <button
              type="submit"
              className="w-full bg-sky-300 p-2 rounded-md hover:ring-2 focus:bg-sky-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
