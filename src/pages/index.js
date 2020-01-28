import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Banner from '../components/Banner';
import Works from '../components/Works';
import Service from '../components/Service';
import SEO from '../components/Seo';
import Section from '../components/Section';

const IndexPage = ({ data }) => {
    return (
        <Layout pageName='home'>
            <SEO title='Home' />
            <Banner image={data.banner.childImageSharp.fluid} />
            <Section
                id='section1'
                title='O Nas'
                contents={[
                    {
                        tag: 'p',
                        content: [
                            {
                                tag: 'strong',
                                content: 'AUTOREJESTR.COM '
                            },
                            {
                                content:
                                    'to prężnie rozwijająca się firma. Oferujemy profesjonalną usługę w zakresie rejestracji samochodów osobowych, dostawczych i ciężarowych zakupionych w Polsce jak i sprowadzonych z zagranicy.'
                            }
                        ]
                    },
                    {
                        tag: 'p',
                        content:
                            'Nasza firma zajmuje się również ubezpieczeniami komunikacyjnymi, na życie oraz nieruchomości. Współpracujemy z kilkoma największymi firmami działającymi w Polsce, dlatego jesteśmy w stanie przygotować Państwu najkorzystniejszą ofertę ubezpieczeniową, w pełni spełniającą Państwa wymagania.'
                    }
                ]}
            />
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
            <Section
                id='section3'
                title='REJESTRACJA POJAZDÓW'
                contents={[
                    {
                        tag: 'p',
                        content:
                            'Nasza oferta obejmuje rejestrację wszelkiego rodzaju pojazdów krajowych, jak i sprowadzanych z zagranicy. Nasza ogromne doświadczenie gwarantuje Państwu, że zlecona nam usługa zostanie profesjonalnie wykonana.'
                    },
                    {
                        tag: 'p',
                        content:
                            'Z nami oszczędzą Państwo: CZAS PIENIĄDZE NERWY Zadzwoń teraz i zamów rejestracje samochodu z dojazdem do klienta, Tel: 608 723 482'
                    }
                ]}
            />
            <Section
                id='section4'
                title='UBEZPIECZENIA'
                contents={[
                    {
                        tag: 'p',
                        content:
                            'Dodatkowo świadczymy szeroki wachlarz usług ubezpieczeniowych, również komunikacyjnych. Naszymi głównymi partnerami są MTU oraz GENERALI i PROAMA.'
                    },
                    {
                        tag: 'p',
                        content: 'loga ubezpieczalni'
                    }
                ]}
            />
            <Section
                id='section5'
                title='TŁUMACZENIA'
                contents={[
                    {
                        tag: 'p',
                        content:
                            'Firma Autorejestr.com współpracuje z tłumaczami przysięgłymi wszystkich języków unijnych jak i spoza unii. Tłumaczymy dokumenty samochodów jak i inne niestandardowe teksty. Nasze ceny są konkurencyjne. Oferujemy Państwu usługi na najwyższym poziomie gwarantując pewność bezpieczeństwa Państwa dokumentów.'
                    }
                ]}
            />
            {/* <Works />
            <Service /> */}
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
