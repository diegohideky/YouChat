/**
 * @author Diego Hideky
 */

var express    = require("express")
  , path       = require("path")
  , bodyParser = require("body-parser")
  , session    = require("express-session")
  , passport   = require("passport")
  , load       = require("express-load")
  , error      = require("./resources/middlewares/error")
  , app        = express();

app.use(session({
  secret: 'youchat man',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(error.notFound);
// app.use(error.serverError);
app.use(express.static(path.join(__dirname + "/app")));

load("resources/models")
  .then("resources/validators")
  .then("resources/controllers")
  .then("resources/routes")
  .into(app);

app.listen(process.env.PORT || 3000, function () {
  console.log("YouChat on the air!");
});