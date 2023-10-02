/* eslint-disable no-unused-vars */
import React from 'react'

function Booklist() {
  return (
    <div className="w-6/12">
      <div className="w-full flex justify-between items-center p-3 border border-amber-400">
        <div>Book</div>
        <div>
          <button className="bg-slate-600 px-2 py-1 rounded mx-1">Read</button>
          <button className="bg-slate-600 px-2 py-1 rounded mx-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booklist
