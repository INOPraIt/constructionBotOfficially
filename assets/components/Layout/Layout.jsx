import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default Layout;