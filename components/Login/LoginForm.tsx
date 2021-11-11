import React from 'react';
import { HiPlusCircle, HiArrowSmRight } from 'react-icons/hi';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl mb-5">Logo</h1>
      <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div className="px-5 py-7">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            E-mail
          </label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
          />
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Heslo
          </label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
          />
          <button
            type="button"
            className="transition duration-200 bg-pardubice-default hover:bg-pardubice-dark focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2 flex justify-center items-center">
              Přihlásit se
              <HiArrowSmRight className="float-right" />
            </span>
          </button>
        </div>
        <div className="py-5 flex justify-center items-center text-center">
          <div>
            <div className="text-center sm:text-left whitespace-nowrap">
              <Link href="registrace" passHref>
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <HiPlusCircle className="text-base float-left   " />
                  <span className="inline-block ml-1">Zaregistrovat se</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;