import React from "react";
import { PodiumOutline } from "react-ionicons";

function login() {
  return (
    <div className="flex h-screen bg-blue-100">
      <div className=" m-auto">
        <div
          className="text-gray-900
            flex
            items-center
            justify-center
            font-semibold
            text-2xl mb-4"
        >
          <PodiumOutline color={"#500eec"} height="50px" width="50px" />
        </div>
        <div className="m-auto bg-white px-6 py-7 rounded-md">
          <h1 class="text-center text-xl font-semibold mb-4">
            Sign in to your account
          </h1>
          <div class="mt-6 flex-row space-y-4 items-end">
            <button class="w-full" type="button">
              <div
                class="
                      flex
                      items-center
                      justify-center
                      py-3
                      px-5
                      border-2 border-gray-300
                      hover:border-primary-400
                      rounded-md
                    "
              >
                <span class="w-6 h-6 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      ></path>
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible"></use>
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-xl font-semibold">
                  Sign in with Google
                </span>
              </div>
            </button>
            <button class="w-full" type="button">
              <div
                class="
                      flex
                      items-center
                      justify-center
                      py-3
                      px-5
                      border-2 border-gray-300
                      hover:border-primary-400
                      rounded-md
                    "
              >
                <span class="w-6 h-6 inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14222 14222"
                  >
                    <circle
                      cx="7111"
                      cy="7112"
                      r="7111"
                      fill="#1977f3"
                    ></circle>
                    <path
                      d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-xl font-semibold">
                  Sign in with Facebook
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
