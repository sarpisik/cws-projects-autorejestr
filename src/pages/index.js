import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Banner from '../components/Banner';

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
    </Layout>
  );
};

export default IndexPage;
