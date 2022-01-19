import React from "react";

function index() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center text-center p-5">
      <h1 className="text-5xl font-bold text-gray-900 mb-3">Increase Your <span className="text-blue-700"> Social Media Reach </span></h1>
      <p className="text-gray-400  text-2xl whitespace-pre-line mt-4 mb-6">
        The easiest way to create <span className="font-bold">eye-catching</span> and <span className="font-bold"> colorful </span> social share image
        automatically. <br /> Generate images with only one line of code.
      </p>
      <button class="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started for free
      </button>
    </div>
    <div className="mt-12 mx-32 rounded-md">
        <img src="/img/hero-image.png" alt="Dashboard Image" />
    </div>
    </div>
  );
}

export default index;
