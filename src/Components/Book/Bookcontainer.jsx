/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Booklist from './Booklist'
import Bookinfo from './Bookinfo';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/BookSlice';



function Bookcontainer() {

  const { isLoading, booksL } = useSelector((state) => state.books);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="flex gap-8 ">
      <Booklist isLoading={isLoading} booksL={booksL} />
      <Bookinfo />
    </div>
  );
}

export default Bookcontainer
