/**
 *
 * @param app
 */
module.exports = function (app) {
  var user = app.resources.controllers.user
    , auth = require("./../middlewares/auth");
  app.get("/api/users", user.findAll);
  app.get("/api/user/:_id", user.find);
  app.post("/api/login", user.login);
  app.post("/api/user", user.insert);
  app.post("/api/user/add/contact", user.insertContact);
};