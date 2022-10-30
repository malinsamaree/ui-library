import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import styled from '../../../node_modules/styled-components/dist/styled-components.esm.js';

var _templateObject;
var ChipWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    border: ", ";\n    border-radius: 100px;\n    padding: 10px 20px;\n"])), function (props) {
  return "1px solid ".concat(props.$error ? 'red' : props.$active ? 'blue' : 'grey');
});

export { ChipWrapper };
