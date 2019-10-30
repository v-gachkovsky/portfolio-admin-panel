import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import saga from './saga';
import reducer from './reducer';

import { getProducts } from './routines';

import Container from './ProductDesignPage';

const mapDispatchToProps = dispatch => bindActionCreators({
  getProducts,
}, dispatch);

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product-design', saga });
const withReducer = injectReducer({ key: 'product-design', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Container);
