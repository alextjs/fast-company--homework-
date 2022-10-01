import React from "react";
import PropTypes, { array } from "prop-types"

const GroupList = ({items, valueProperty, contentProperty, onItemSelect, selectedItem}) => {


  const renderList = (item) => {
    return (
      <li key={item[valueProperty]} className={"list-group-item" + (item === selectedItem ? " active" : "")}
      onClick={() => onItemSelect(item)}
      role="button"
      >{item[contentProperty]}</li>
    )
  }

  return ( 
    <ul className="list-group">
      {/* {Object.keys(items).map((item)=> 
      <li 
      key={items[item][valueProperty]} 
      className={"list-group-item" + (items[item] === selectedItem ? " active" : "")}
      onClick={()=>onItemSelect(items[item])}
      role="button"
      >
        {items[item][contentProperty]}
      </li>)} */}

      {Array.isArray(items) ? items.map((item) => renderList(item)) : Object.keys(items).map((item) => renderList(items[item]))}
  </ul>
   );
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
}
 
export default GroupList;

