import React from "react";



const BookMark = ({ status, ...rest  }) => {

    return (
        <>
        <button
            className="btn btn-sm"
            {...rest}>
            {status ? (<i className="bi bi-bookmark-check-fill"></i>) : (<i className="bi bi-bookmark-check"></i>) }
        </button>
        </>
    )
}

export default BookMark;