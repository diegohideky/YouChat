module.exports = function (app) {
  return {
    validate: function (user) {
      var success = true
        , message = "Requisição Válida";

      if (!isValid(user.username)) {
        success = false;
        message = "propriedade Username está inválida";
      } else if (!isValid(user.email)) {
        success = false;
        message = "propriedade Email está inválida";
      } else if (!isValid(user.password)) {
        success = false;
        message = "propriedade Password está inválida";
      }

      return { success: success, message: message };
    }
  };
};

var isValid = function (property) {
  return typeof property !== 'undefined' && property !== null && property !== "";
};
