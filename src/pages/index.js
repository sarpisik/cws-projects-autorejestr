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
import Section from '../components/Section';

const IndexPage = ({ data }) => {
    return (
        <Layout pageName='home'>
            <SEO title='Home' />
            <Banner image={data.banner.childImageSharp.fluid} />
            <About />
            <Section
                id='section2'
                title='DLACZEGO MY?'
                contents={[
                    {
                        tag: 'p',
                        content:
                            'Naszą maksymą jest - szybki czas realizacji, miła obsługa oraz pełen profesjonalizm. Dołącz do grona naszych zadowolonych klientów.'
                    },
                    {
                        tag: 'p',
                        content:
                            'Stale uczestniczymy w szkoleniach branżowych, dzięki czemu nasi klienci mogą być pewni, że nasza wiedza jest na bieżąco udoskonalana. Nasze kwalifikacje i doświadczenie sprawiają, że powierzone nam zadania są szybko i profesjonalnie załatwiane.'
                    }
                ]}
            />
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
