import React from 'react';
import { Link } from 'gatsby';

const ExternalLink = ({ children, ...props }) => (
  <Link {...props} target="_blank">
    {children}
  </Link>
);

export default ExternalLink;
