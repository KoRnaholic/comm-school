import React from "react";
import { inputdata } from "../data/inputData";

export function Input() {
  return (
    <>
      <div className="max-w-md mx-auto mt-16">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {inputdata.map((data) => {
            const { label, id, type, placeholder } = data;
            return (
              <div key={id} className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={label}
                >
                  {label}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={id}
                  type={type}
                  placeholder={placeholder}
                />
              </div>
            );
          })}

          <div className="flex items-center justify-center">
            <button
              className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
