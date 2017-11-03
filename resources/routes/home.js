/**
 *
 * @param app
 */
module.exports = function (app) {
  var home = app.resources.controllers.home;
  app.get("/", home.index);
};