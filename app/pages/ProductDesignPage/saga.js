import { takeLatest, call, put } from 'redux-saga/effects';
import * as productsApi from 'api/products';
import { getProducts } from './routines';

function* getProductsSaga() {
  const response = yield call(productsApi.getProducts);
  console.log('response', response);
  yield put(getProducts.success(response.products));
}

export default function* () {
  yield takeLatest(getProducts.TRIGGER, getProductsSaga);
}
