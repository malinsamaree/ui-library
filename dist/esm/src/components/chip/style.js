import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import newStyled from '../../../node_modules/@emotion/styled/dist/emotion-styled.esm.js';

var _templateObject;
var ChipWrapper = newStyled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    border: ", ";\n    border-radius: 100px;\n    padding: 10px 20px;\n"])), function (props) {
  return "1px solid ".concat(props.error ? 'red' : props.active ? 'blue' : 'grey');
});

export { ChipWrapper };
