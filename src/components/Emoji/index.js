import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ symbol, description }) => (
  <span role="img" aria-label={description}>
    {symbol}
  </span>
);

Emoji.defaultProps = {
  description: 'You should provide an accessible description',
};

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Emoji;
