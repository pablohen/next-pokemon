import React from 'react';

const TitleBar = ({ title }) => {
  return (
    <header className="bg-blue-400 mb-2">
      <p className="capitalize text-white font-bold px-4 py-4">{title}</p>
    </header>
  );
};

export default TitleBar;
