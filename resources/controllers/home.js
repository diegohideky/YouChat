/**
 *
 * @param app
 * @returns {{}}
 */
module.exports = function (app) {
  return {
    index: function (req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
    }
  }
};