const typeDelimiter = '/';

const makeType = (prefix, type) => prefix.concat(type).join(typeDelimiter);

const extractType = (type) => {
  const sagaRoutineEnding = '/TRIGGER';
  if (type.endsWith(sagaRoutineEnding)) {
    return type.slice(0, -sagaRoutineEnding.length);
  }
  return type;
};

const iterator = (reducers = {}, initial = {}, prefix = []) => {
  const reducerTypes = Object.keys(reducers);

  return reducerTypes.reduce((acc, type) => {
    const reducer = reducers[type];

    return typeof (reducer) === 'function'
      ? ({
        ...acc,
        [makeType(prefix, type)]: reducer,
      })
      : iterator(
        reducer,
        acc,
        [makeType(prefix, extractType(type))]
      );
  }, initial);
};

/**
 * Utility function that helps to reduce boilerplate in reducer function.
 * Allows to use plain object map instead of switch function.
 * Object keys serve as switch cases.
 *
 * Additionaly:
 * 1. Allows to use deep object keys.
 *   eg: { foo: { bar: func } } will be converted to 'foo/bar': func switch case.
 *
 * 2. Checks if deep object top key is redux saga routine.
 *    If it is, ending 'TRIGGER' will be trimmed to use correct action type name.
 */
export default function createReducer(reducerMap, initialState) {
  const flattened = iterator(reducerMap);

  return (state = initialState, action) => {
    const reducer = flattened[action.type];
    return reducer ? reducer(state, action.payload) : state;
  };
}
