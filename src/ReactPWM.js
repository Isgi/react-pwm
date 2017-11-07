const ReactPrimitives = require('react-primitives');
const ReactPWM = {
  ...ReactPrimitives,
  Button: null,
  inject: (api) => {
    if (api.Button) {
      ReactPWM.Button = api.Button;
    }
  },
};

module.exports = ReactPWM;
