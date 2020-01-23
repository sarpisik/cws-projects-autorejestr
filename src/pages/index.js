import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Banner from '../components/Banner';
import Works from '../components/Works';
import About from '../components/About';
import Service from '../components/Service';

const IndexPage = ({ data }) => {
  return (
    <Layout pageName='home'>
      <Banner image={data.banner.childImageSharp.fluid} />
      <Works />
      <About />
      <Service />
    </Layout>
  );
};

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "cars-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
