/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Booklist from './Booklist'
import Bookinfo from './Bookinfo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBook, getBooks } from '../../store/BookSlice';


function Bookcontainer() {

  const { isLoading, booksL, readBook } = useSelector((state) => state.books);
  const { isLigedIn } = useSelector((state) => state.auth);

  // console.log(readBook);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="flex gap-8 ">
      <Booklist
        isLoading={isLoading}
        booksL={booksL}
        isLigedIn={isLigedIn}
        dispatch={dispatch}
        deleteBook={deleteBook}
        getBook={getBook}
      />
      <Bookinfo readBook={readBook} />
    </div>
  );
}

export default Bookcontainer
