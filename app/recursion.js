exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const filesList = [];

    if (dirName) {
      const dir = data.files.find((e) => e.dir === dirName);
      if (!dir) {
        throw new Error("Directory was not found");
      }
      return recursionAnswers.listFiles(dir);
    }

    for (const element of data.files) {
      if (typeof element === "string") {
        filesList.push(element);
      } else {
        filesList.push(...recursionAnswers.listFiles(element));
      }
    }
    return filesList;
  },

  permute: function (arr) {},

  fibonacci: function (n) {},

  validParentheses: function (n) {},
};
