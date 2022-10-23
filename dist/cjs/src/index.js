'use strict';

var Spinner = require('./components/spinner/Spinner.js');
var Chip = require('./components/chip/Chip.js');
var types = require('./components/chip/types.js');



exports.Spinner = Spinner.Spinner;
exports.Chip = Chip.Chip;
Object.defineProperty(exports, 'ChipType', {
	enumerable: true,
	get: function () { return types.ChipType; }
});
