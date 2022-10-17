import React from "react";
import PropTypes from "prop-types";

const ArrowElement = ({ selectedObj, path }) => {
    // Условие где стрелочка должна отобразиться
    return selectedObj.path === path ? (
        // Направление стрелочки
        selectedObj.order === "asc" ? (
            <i className="bi bi-caret-up-fill ms-1"></i>
        ) : (
            <i className="bi bi-caret-down-fill ms-1"></i>
        )
    ) : null;
};

ArrowElement.propTypes = {
    selectedObj: PropTypes.object,
    path: PropTypes.string
};

export default ArrowElement;
