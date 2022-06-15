const log4js = require("log4js");
const config = require("../../config/log4js.config.js");
let console;

log4js.configure(config);

// Console Logger
console = log4js.getLogger();

module.exports = {
  console
};