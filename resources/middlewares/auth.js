module.exports = function (req, res, next) {
  if (req.session._id && req.session.username && req.session.email) {
    return next();
  }

  return res.send({success: false, message: "Você não está autenticado"});
};