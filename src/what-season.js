const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  }
  catch {
    throw new Error('Fake Date');
  }

  let month = date.getMonth();
  return ([0, 1, 11].includes(month)) ? "winter" :
    ([2, 3, 4].includes(month)) ? "spring" :
      ([5, 6, 7].includes(month)) ? "summer" : "autumn";
};
