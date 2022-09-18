import React from "react";
import searchStatus from "../../utilits/utility";

const SearchStatus = (props) => {
    const { length } = props;
    return (
    <h2><span
        className={`badge ${length.length > 0 ? 'bg-primary' : 'bg-danger'} p-2`}>
        {length > 0 ? `${length} ${searchStatus(length)} с тобой сегодня` : 'Никто с тобой не тусанёт'}</span></h2>
    )
}

export default SearchStatus;