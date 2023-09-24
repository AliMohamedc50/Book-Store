/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import Popup from "./Popup/Popup";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Card = ({ card, border, deleteFunc, setPop }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {card.map(({ id, name, age, email, type }) => {
        const bgBoy = "rgb(15 118 110)";
        const bgGirl = "rgb(190 24 93)";
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            key={id}
            className="rounded-lg drop-shadow-lg w-80  m-auto mt-5 p-5 relative text-white"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            style={{
              borderColor: border,
              background: type === "boy" ? bgBoy : bgGirl,
            }}
          >
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            <span
              onClick={(e) => {
                deleteFunc(e, id);
                setPop(true);
              }}
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
