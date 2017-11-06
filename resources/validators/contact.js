module.exports = function (app) {
  return {
    validate: function (contact) {
      var success = true
        , message = "Requisição Válida";

      if (!isValid(contact.username)) {
        success = false;
        message = "propriedade Username está inválida";
      } else if (!isValid(contact.email)) {
        success = false;
        message = "propriedade Email está inválida";
      }
      return { success: success, message: message };
    }
  };
};

var isValid = function (property) {
  return typeof property !== 'undefined' && property !== null && property !== "";
};
