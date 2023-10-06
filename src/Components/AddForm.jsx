/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postbook } from '../store/BookSlice';
import { useRef } from 'react';

function AddForm() {
  const { isLigedIn } = useSelector((state) => state.auth);

  const title = useRef(null)
  const price = useRef(null)
  const description = useRef(null)

  const dispach = useDispatch()
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispach(postbook(data));
    title.current.value = null
    price.current.value = null
    description.current.value = null
  // console.log("ddddd")
}

    return (
      <div onSubmit={handelSubmit}>
        <div className="m-auto w-96">
          <h2 className="fw-bold fs-6">Insert Book</h2>
          <form>
            <div className="flex flex-col	p-2">
              <label htmlFor="title">Title</label>
              <input
                ref={title}
                type="text"
                className="border-2 border-slate-700 "
                id="title"
                required
              />
            </div>
            <div className="flex flex-col	p-2">
              <label htmlFor="price">Price</label>
              <input
                ref={price}
                type="number"
                className="border-2 border-slate-700"
                id="price"
                required
              />
            </div>
            <div className="flex flex-col	p-2">
              <label htmlFor="Description">Description</label>
              <textarea
                ref={description}
                className="border-2 border-slate-700"
                id="Description"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-slate-500 px-4 py-2 rounded-md"
              disabled={!isLigedIn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default AddForm
