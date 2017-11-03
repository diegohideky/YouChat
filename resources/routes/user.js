/**
 *
 * @param app
 */
module.exports = function (app) {
  var user = app.resources.controllers.user;
  app.get("/api/user", user.find);
  app.post("/api/user", user.insert);
};