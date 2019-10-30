import { takeLatest, call, put } from 'redux-saga/effects';
import * as productsApi from 'api/products';
import { getProducts } from './routines';

function* getProductsSaga() {
  const products = yield call(productsApi.getProducts);
  yield put(getProducts.success(products));
}

export default function* () {
  yield takeLatest(getProducts.TRIGGER, getProductsSaga);
}
