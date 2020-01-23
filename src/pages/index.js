import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Banner from '../components/Banner';
import Works from '../components/Works';
import About from '../components/About';
import Service from '../components/Service';

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      <Works />
      <About />
      <Service />
    </Layout>
  );
};

export default IndexPage;
