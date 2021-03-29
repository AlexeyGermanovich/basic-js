const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let membersNames = members.filter(function (item) {
    return (typeof item === "string" || item instanceof String)
  })

  let names = membersNames.map(function (name) {
    return name.toUpperCase().trim();
  })

  let result = names.sort().reduce(function (sum, current) {
    return sum + current[0];
  },
    "")

  return result;
};
