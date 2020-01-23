import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/sass/main.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from './Nav';

const Layout = ({ children, pageName }) => {
  let className = '';

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className='wrapper'>
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
