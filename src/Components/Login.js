import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt="bg-banner"
        />
      </div>
      <form className="w-3/12 absolute mt-36 mx-auto right-0 left-0 bg-black px-12 py-6 text-white bg-opacity-80 rounded-md ">
        <h1 className="font-bold text-3xl py-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div class="relative">
            <input
              type="text"
              id="full_name"
              class=" rounded-md my-2 px-2.5 pb-2.5 pt-5 w-full bg-transparent  border-[1px] border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              for="full_name"
              class="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
            >
              Full Name
            </label>
          </div>
        )}
        <div class="relative">
          <input
            type="text"
            id="email_address"
            class=" rounded-md my-2 px-2.5 pb-2.5 pt-5 w-full bg-transparent  border-[1px] border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          />
          <label
            for="email_address"
            class="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
          >
            Email Address
          </label>
        </div>
        <div class="relative">
          <input
            type="password"
            id="password"
            class=" rounded-md my-2 px-2.5 pb-2.5 pt-5 w-full bg-transparent  border-[1px] border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          />
          <label
            for="password"
            class="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
          >
            Password
          </label>
        </div>

        <button className="p-2 my-2 bg-red-600 w-full rounded-md cursor-pointer hover:bg-red-700 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <p className=" text-base my-5 text-gray-400 ">
            New to Netflix?{" "}
            <span
              className="hover:underline cursor-pointer text-white"
              onClick={toggleSignInForm}
            >
              Sign Up now
            </span>
            .
          </p>
        )}
        {!isSignInForm && (
          <p
            className=" text-base my-5 text-gray-400"
            onClick={toggleSignInForm}
          >
            Already Registered?{" "}
            <span
              className="hover:underline cursor-pointer text-white"
              onClick={toggleSignInForm}
            >
              Sign In now
            </span>
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
