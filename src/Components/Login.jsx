import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="bg-blue-400 rounded-xl p-10 flex flex-col items-center gap-5">
        <h1 class="text-3xl font-semibold ">Login </h1>
        <div>
          <div>
            <div>College Name</div>
            <input
              className="bg-blue-100 p-1 rounded-2xl"
              type="text"
              name="collegename"
              id="college name"
              placeholder="College Name"
            />
          </div>
          <div>
            <div>Email</div>
            <input
              className="bg-blue-100 p-1 rounded-2xl"
              type="email"
              name="email"
              id="email"
              placeholder="username@email.com"
            />
          </div>
          <div>
            <div>Password</div>
            <input
              className="bg-blue-100 p-1 rounded-2xl"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white p-2  rounded-2xl hover:bg-slate-200 hover:text-black"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
