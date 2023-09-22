// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ filterName }) => {
    const [filter, setFilter] = useState();
    const filterHandler = (e) => {
        const name = e.target.value; 
        setFilter(name);
        filterName(name);
    };
    return (
        <input
        type="text"
        placeholder="Filter by name"
        className="border-solid border-2 border-sky-500 rounded-md mx-3 p-2"
        value={filter}
        onChange={filterHandler}
        />
    );
};

export default Filter;
