const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  } else {
    console.log(key);
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
}