import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Banner from '../components/Banner';
import Works from '../components/Works';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Service from '../components/Service';
import SEO from '../components/Seo';
import Registration from '../components/Registration';
import Insurance from '../components/insurance';
import Translations from '../components/Translations';

const IndexPage = ({ data }) => {
    return (
        <Layout pageName='home'>
            <SEO title='Home' />
            <Banner image={data.banner.childImageSharp.fluid} />
            <About />
            <WhyUs />
            <Registration />
            <Insurance />
            <Translations />
            <Works />
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
