exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve) => resolve(value));
  },

  manipulateRemoteData: function (url) {
    return $.get(url)
      .then((data) => data.people.map((p) => p.name))
      .then((names) => names.sort());
  },
};
