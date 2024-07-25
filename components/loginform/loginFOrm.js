import { loginLogo } from "@/public";
import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
const LoginForm = ({ onClose }) => {
  return (
    <section className="bg-[#252627] z-30 w-full sm:w-[480px] mx-auto absolute pt-10 ">
      <button
        onClick={onClose}
        className="absolute text-white -right-3 rounded-full p-3 bg-[#3d3e3e] -top-3"
      >
        <ImCross size={10} />
      </button>
      <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0">
        <div
          href="#"
          className="flex flex-col justify-center gap-4 items-center  text-xl font-semibold text-gray-900 dark:text-white"
        >
          <h1>Welcome back!</h1>
          <Image width={40} src={loginLogo} alt="logo" />
        </div>

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block capitalize mb-2 text-sm font-medium text-gray-400 "
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray text-gray-900  block w-full p-2  dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500"
                placeholder="name@email.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block capitalize mb-2 text-sm font-medium text-gray-400 "
              >
                Password{" "}
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                className="bg-gray text-gray-900  block w-full p-2  dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500"
                placeholder="name@email.com"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm text-[#FFE400] font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-black bg-[#FFE400] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
            <div className="flex justify-center w-full items-center p-8 bg-[#353637]">
              <p className="text-sm font-light text-white ">
                Dont have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-[#FFE400] "
                >
                  Register
                </a>
              </p>
            </div>
    </section>
  );
};

export default LoginForm;
