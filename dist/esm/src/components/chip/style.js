import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import styled from '../../../node_modules/styled-components/dist/styled-components.esm.js';
import { ChipType } from './types.js';

var _templateObject;
var ChipWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 5px 15px;\n    display: inline-flex;\n    border-radius: 8px;\n    border: ", "\n    font-size: ", "px;\n    cursor: pointer;\n"])), function (props) {
  return "2px solid ".concat(props.error ? '#A04000' : props.active ? '#5F9EA0' : '#333333');
}, function (props) {
  return props.type === ChipType.CLOSE ? '12' : props.type === ChipType.MENU ? '24' : '16';
});

export { ChipWrapper };
