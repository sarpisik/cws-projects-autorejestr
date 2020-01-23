import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'assets/sass/main.scss';

const Layout = ({ children, pageName }) => {
  let className = '';

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
