import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ProductDesignPage({ getProducts }) {
  useEffect(
    () => {
      getProducts();
    },
    []
  );
  return (
    <div>ProductDesignPage</div>
  );
}

ProductDesignPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default ProductDesignPage;
