/* eslint-disable no-unused-vars */
import React from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from '../store/AuthSlice';

function Header() {
  const dispache = useDispatch()

  const { isLigedIn } = useSelector((state) => state.auth);
  const { errorApi } = useSelector((state) => state.books)
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
            className="relative bg-slate-600 p-2  hover:bg-slate-400 text-slate-50 rounded-md"
            type="submit"
            onClick={() => dispache(logInOut())}
          >
            {isLigedIn ? "Log In" : "Log Out"}
            {isLigedIn &&
              <span className="absolute -bottom-14 right-0 bg-neutral-700 w-40 rounded-lg ease-in duration-300  p-3">
              don't forget Log in
            </span>
            }
          </button>
        </nav>
      </Fragment>
    );
}

export default Header
