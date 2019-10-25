import { injectSaga } from 'utils/saga';
import saga from './saga';

injectSaga([saga]);

export { default } from './ProductDesignPage';
