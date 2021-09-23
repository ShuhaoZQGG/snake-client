const {
  terminate,
  up,
  left,
  right,
  down,
  upCommand,
  downCommand,
  leftCommand,
  rightCommand
} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === terminate) {
    process.exit();
  } else if (key === up) {
    connection.write(upCommand);
  } else if (key === left) {
    connection.write(leftCommand);
  } else if (key === right) {
    connection.write(rightCommand);
  } else if (key === down) {
    connection.write(downCommand);
  }
};

module.exports = {
  setupInput
};