'use strict';

var Promise = require('promise');

/**
 * Prints object to CLI
 * @param {object} object Some output to CLI
 */
function send(object) {
  console.log(object);
  return Promise.resolve(object);
}

function DriverCli() {

}

DriverCli.prototype.send = send;

module.exports = DriverCli;