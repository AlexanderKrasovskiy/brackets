module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;

  const config = Object.fromEntries(bracketsConfig);
  let stack = [];

  for (let char of str) {
    let stackTop = stack[stack.length - 1];
    if (char === config[stackTop]) {
      stack.pop();
    } else {
      stack.push(char)
    }
  };

  return stack.length === 0
}
