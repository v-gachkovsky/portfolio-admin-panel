import request from 'api';

export function getProducts() {
  return request.get('/products');
}
