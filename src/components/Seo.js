import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query SEOQuery {
    site: site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

function SEO({ description, lang: language, meta, keywords = [], title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site || !data.site.siteMetadata) {
          return;
        }
        const { siteMetadata } = data.site;

        const metaDescription = description || siteMetadata.description;
        const lang = language || siteMetadata.lang;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={
              title === siteMetadata.title ? '%s' : `%s | ${siteMetadata.title}`
            }
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', ')
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'tr',
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
