import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Banner from '../components/Banner';
import Works from '../components/Works';

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      <Works />
    </Layout>
  );
};

export default IndexPage;
