/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Card = ({ card, border, background, deleteFunc }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {card.map((ele, i) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            key={i}
            className="border-2 rounded w-80  m-auto mt-5 p-5 relative text-white"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            style={{ borderColor: border, background: background }}
          >
            <p>{ele.name}</p>
            <p>{ele.age}</p>
            <p>{ele.email}</p>
            <span
              onClick={(e) => deleteFunc(e, i)}
              className="absolute right-2 top-2 w-7 h-7 rounded-full fw-bold bg-slate-950 flex justify-center items-start cursor-pointer"
            >
              x
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
