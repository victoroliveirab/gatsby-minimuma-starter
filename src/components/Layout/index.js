import React from 'react';
import GlobalStyles from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
