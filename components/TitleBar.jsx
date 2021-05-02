import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({ title }) => (
  <header className="bg-blue-600 mb-2">
    <p className="capitalize text-white font-bold px-4 py-4">{title}</p>
  </header>
);

TitleBar.defaultProps = {
  title: '',
};

TitleBar.propTypes = {
  title: PropTypes.string,
};

export default TitleBar;
