'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS UINT8ARRAY //

/**
* FUNCTION: isUint8Array( value )
*	Validates if a value is an Uint8Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Uint8Array
*/
function isUint8Array( value ) {
	return isStr.call( value ) === '[object Uint8Array]';
} // end FUNCTION isUint8Array()


// EXPORTS //

module.exports = isUint8Array;
