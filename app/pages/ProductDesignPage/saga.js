import { delay, call } from 'redux-saga/effects';

function* dynamicSaga() {
  console.log('hello, world');
}

export default function* () {
  while (true) {
    yield call(dynamicSaga);
    yield delay(500);
  }
}
