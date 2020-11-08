import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../shared/hooks/useSiteMetadata';

const SEO = ({ title, description, lang, meta }) => {
  const metadata = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || metadata.title}
      titleTemplate={title ? `${title} | ${metadata.title}` : null}
      meta={[
        {
          name: `description`,
          content: description || metadata.description,
        },
        {
          property: `og:title`,
          content: title || metadata.title,
        },
        {
          property: `og:description`,
          content: description || metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
