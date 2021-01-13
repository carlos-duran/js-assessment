exports = typeof window === "undefined" ? global : window;

exports.modulesAnswers = {
  createModule: function (str1, str2) {
    const myModule = {
      name: str2,
      greeting: str1,
      sayIt() {
        return `${this.greeting}, ${this.name}`;
      },
    };

    return myModule;
  },
};
