/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Booklist from './Booklist'
import Bookinfo from './Bookinfo';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../store/BookSlice';

function Bookcontainer() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className='flex'>
      <Booklist />
      <Bookinfo />
    </div>
  );
}

export default Bookcontainer
