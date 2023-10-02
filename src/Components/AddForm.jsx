/* eslint-disable no-unused-vars */
import React from 'react'

function AddForm() {
    return (
      <div className="">
        <div className="m-auto w-96">
          <h2 className="fw-bold fs-6">Insert Book</h2>
          <form>
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="border-y-2 border-y-slate-700 "
                id="title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="border-y-2 border-y-slate-700"
                id="price"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <textarea
                className="border-y-2 border-slate-700"
                id="Description"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-slate-500 px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default AddForm
