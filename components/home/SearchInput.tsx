import React from "react";

export default function SearchInput() {
  return (
    <div className="w-full inline-flex">
      <input
        type="text"
        placeholder="Search GradeBook"
        className="w-full rounded-md text-gray-800 bg-gray-100 focus:bg-white border-none
        focus:border-none focus:shadow-lg py-3 px-10 max-w-xl text-md focus:text-gray-800"
      />
      <svg
        className="h-5  mt-4 px-4  absolute  text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
