/**
 *
 * @param app
 */
module.exports = function (app) {
  var contact = app.resources.controllers.contact;
  app.get("/api/contacts/:userId", contact.findAll);
  app.post("/api/contact", contact.insert);
};