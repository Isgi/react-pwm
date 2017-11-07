const ReactPWM = require('../ReactPWM');
const ReactPrimitives = require('react-primitives');

ReactPWM.inject({
  ...ReactPrimitives,
  Button : require('../modules/Button')
});
