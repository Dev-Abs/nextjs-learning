import React from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 py-12 pt-36">
        <h1 className="text-6xl text-center text-white font-bold mt-10" >
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mt-4">
          We are here to help you. Please fill the form below to contact us.
        </p>
        <div className="container mx-auto flex flex-wrap">
          <form className="w-[70%] mt-6 mx-auto bg-gray-900 p-16 rounded-xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-black border-2 border-slate-700 rounded py-3 px-4 mb-3 leading-tight"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-black border-2 border-slate-700 rounded py-3 px-4 leading-tight focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-black  border-2 border-slate-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-password"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-black border-slate-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-password" cols={30} rows={10}  placeholder="Your message here"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-teal-300 hover:bg-teal-200 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                  type="button"
                >
                  Send Message
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
      <Meteors number={30} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
