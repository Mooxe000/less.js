// cmd.js
//
// Define Less as an CMD module.
if (typeof define === "function" && define.cmd) {
    define(function ( require, exports, module ) { module.exports(less); } );
}
