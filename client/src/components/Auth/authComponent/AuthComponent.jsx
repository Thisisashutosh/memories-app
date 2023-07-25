import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthComponent = ({
  isSignup,
  data,
  handleSubmit,
  handleemail,
  handlepassword,
  switchmode,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseMessage = async (response) => {
    var res = jwt_decode(response.credential);

    const result = { ...res, email: res.email, name: res.given_name };
    const token = res?.jti;
    console.log(res);

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {isSignup
                  ? "Create an account"
                  : "Sign-in to your existing account"}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={handleemail}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handlepassword}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  // onClick={() => handleSubmit}
                >
                  {isSignup ? "Create an account" : "Sign In"}
                </button>
              </form>
              <GoogleLogin
                onSuccess={responseMessage}
                onError={errorMessage}
                cookiePolicy="single_host_origin"
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {isSignup
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <button
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  onClick={() => demo}
                >
                  {isSignup ? "Login here" : "Create one"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthComponent;
