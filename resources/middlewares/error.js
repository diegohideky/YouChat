exports.notFound = function (req, res, next) {
  res.status(404);
  res.send("route not found");
};

exports.serverError = function (error, req, res, next) {
  res.status(500);
  res.send("Server-error");
};
