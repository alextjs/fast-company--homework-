import React from "react";

const Qualities = ({ color, name }) => {
    return (
        <span className={`badge bg-${color} me-1`}>{name}</span>
    )
}

export default Qualities;