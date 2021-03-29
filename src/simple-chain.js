const CustomError = require("../extensions/custom-error");

const chainMaker = {

  simpleChain: [],

  getLength() {
    return this.simpleChain.length;
  },

  addLink(value) {
    if (typeof value == "undefined") {
      value = "";
    }
    this.simpleChain.push(`( ${value} )`);

    return this;
  },

  removeLink(position) {
    if (position > 0 && position < this.simpleChain.length) {
      this.simpleChain.splice(position - 1, 1);
      return this;
    } else {
      this.simpleChain = [];
      throw new Error("Error");
    }
  },

  reverseChain() {
    this.simpleChain.reverse();
    return this;
  },

  finishChain() {
    let finishedChain = this.simpleChain.join('~~');
    this.simpleChain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
