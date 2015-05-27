'use strict';

var isUint8Array = require( './../lib' );

console.log( isUint8Array( new Uint8Array( 10 ) ) );
// returns true

console.log( isUint8Array( new Int8Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isUint8Array( new Int16Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Uint16Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Int32Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Float32Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Float64Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Array( 10 ) ) );
// returns false

console.log( isUint8Array( {} ) );
// returns false

console.log( isUint8Array( null ) );
// returns false
