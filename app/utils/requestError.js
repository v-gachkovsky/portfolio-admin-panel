function PtmError(errorCode, details, ...args) {
  const instance = Reflect.construct(Error, args);
  Reflect.setPrototypeOf(instance, Reflect.getPrototypeOf(this));

  instance.errorCode = errorCode;
  try {
    instance.fieldErrors = JSON.parse(details);
  } catch (e) { /* ignored */ }
  return instance;
}

PtmError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Reflect.setPrototypeOf(PtmError, Error);

export default PtmError;
