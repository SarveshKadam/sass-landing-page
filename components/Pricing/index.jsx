import React, { useState } from "react";
import Switch from "../Switch";
import "./style.module.css";
function index() {
  const [monthyPayment, setMonthlyPayment] = useState(false);

  function onPaymentChange(){
    setMonthlyPayment(!monthyPayment)
  }
  return (
    <div className="h-full py-16 antialiased bg-primary-very-light font-sans mx-10">
      <header className="flex flex-col items-center mb-12">
        <h2 className="text-3xl text-primary-normal  font-bold">Our Pricing</h2>
        <div className="pt-8 w-3/5 lg:w-1/5 flex justify-around">
          <p className="text-sm text-gray-500 font-bold mt-2">Annually</p>
          <Switch onStateChange={onPaymentChange} currentState={monthyPayment} />
          <p className="text-sm text-gray-500 font-bold mt-2 ml-16">Monthly</p>
        </div>
      </header>
      <section className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-10 py-12 ">
        <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">Basic</h5>
          <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
            <span className="text-3xl mt-6 mr-1">$</span>
            <span className="text-6xl"> {monthyPayment ? 29.99 : 199.99}</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-300">
              500 GB Storage
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300">
              2 Users Allowed
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300">
              Send up to 3 GB
            </li>
          </ul>
          <button
            className=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)",
            }}
          >
            Learn More
          </button>
        </article>
        <article
          className="lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg"
          style={{
            backgroundImage: "linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)",
          }}
        >
          <h5 className="font-bold text-base ">Professional</h5>
          <h2 className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center">
            <span className="text-3xl mt-6 mr-1">$</span>
            <span className="text-6xl ">{monthyPayment ? 39.99 : 249.99}</span>
          </h2>
          <ul className=" text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">1 TB Storage</li>
            <li className="pt-4 pb-4 border-b border-gray-200">
              5 Users Allowed
            </li>
            <li className="pt-4 pb-4 border-b border-gray-200">
              Send up to 10 GB
            </li>
          </ul>
          <button className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-primary-blue">
            Learn More
          </button>
        </article>
        <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">Master</h5>
          <h2 className="flex justify-center pb-4 font-bold border-b border-gray-200">
            <span className="text-3xl mt-6 mr-1">$</span>
            <span className="text-6xl">{monthyPayment ? 49.99 : 399.99}</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">2 TB Storage</li>
            <li className="pt-4 pb-4 border-b border-gray-200">
              10 Users Allowed
            </li>
            <li className="pt-4 pb-4 border-b border-gray-200">
              Send up to 20 GB
            </li>
          </ul>
          <button
            className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)",
            }}
          >
            Learn More
          </button>
        </article>
      </section>
    </div>
  );
}

export default index;
