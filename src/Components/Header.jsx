/* eslint-disable no-unused-vars */
import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux';

function Header() {
  const {errorApi } = useSelector((state) => state.books)
    return (
      <Fragment>
        {errorApi && (
          <div className="w-full px-4 py-4 bg-red-400 border border-red-600 ">
            Error
          </div>
        )}
        <nav className="bg-slate-800 w-full px-24 py-4 flex justify-between items-center">
          <span className="text-white text-3xl font-medium">My Books</span>
          <button
            className="bg-slate-600 p-2  hover:bg-slate-400 text-slate-50 rounded-md"
            type="submit"
          >
            Log In
          </button>
        </nav>
      </Fragment>
    );
}

export default Header
