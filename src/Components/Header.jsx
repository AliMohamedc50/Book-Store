/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
    return (
      <nav className="bg-slate-800 w-full px-24 py-4 flex justify-between items-center">
        <span className="text-white fs-6">My Books</span>

        <button
          className="bg-slate-600 p-2  hover:bg-slate-400 text-slate-50 rounded-md"
          type="submit"
        >
          Log In
        </button>
      </nav>
    );
}

export default Header
