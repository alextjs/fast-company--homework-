import React from "react";
import PropTypes from 'prop-types';
import Qualities from './qualitie'

const QualitiesList = ({qualities}) => {
  return <>
  {qualities.map((user) => (
                <Qualities key={user._id} {...user}/>
            ))}
  </>
};

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList;