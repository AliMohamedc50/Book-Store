/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Booklist({ isLoading, booksL }) {
  // console.log(booksL);

  const bookList = booksL.length ? (
    booksL.map((element) => (
      <div
        key={element.id}
        className="w-full flex justify-between rounded-md my-3 items-center p-3 border border-amber-400"
      >
        <div>{element.title}</div>
        <div className="text-white">
          <button className="bg-teal-500 px-2 py-1 rounded mx-1">Read</button>
          <button className="bg-red-700 px-2 py-1 rounded mx-1">Delete</button>
        </div>
      </div>
    ))
  ) : (
    <span className="text-red-800 border-b-2 border-red-900">not found</span>
  );

  return (
    <div className="w-6/12">
      <h1 className="text-3xl font-medium">Books List</h1>
      {isLoading ? "Loading..." : <div>{bookList} </div>}
    </div>
  );
}

export default Booklist;
