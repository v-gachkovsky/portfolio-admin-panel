import { css } from 'styled-components';

export function styledIf(condition) {
  const check = props => typeof condition === 'function'
    ? condition(props)
    : props[condition] === true;

  return (...args) => (props) => check(props) && css(...args);
}
