module.exports = function (app) {
  return {
    validate: function (user) {
      var success = true
        , message = "Request validated";

      if (!isValid(user.username)) {
        success = false;
        message = "property Username is not valid";
      } else if (!isValid(user.email)) {
        success = false;
        message = "property Email is not valid";
      } else if (!isValid(user.password)) {
        success = false;
        message = "property Password is not valid";
      }

      return { success: success, message: message };
    }
  };
};

var isValid = function (property) {
  return typeof property !== 'undefined' && property !== null && property !== "";
};
