/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Bookinfo({readBook}) {
  // console.log(readBook.id);
  return (
    <div>
      <h2 className="text-3xl font-medium">Book Details</h2>
      {!readBook.id ?
   (   <div className="" role="alert">
        There is no post selected yet. Please select!
      </div>) :
     ( <div>
        <p className="fw-bold">Title: {readBook.title}</p>
        <p className="fw-light">Description: {readBook.description}</p>
        <p className="fst-italic">Price: {readBook.price}</p>
      </div>)
      
    }
    </div>
  );
}

export default Bookinfo
