const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = Array.prototype.concat(...matrix);
  let counter = 0;

  for (let item of array) {
    if (item === "^^") {
      counter++;
    }
  }
  return counter;
};
