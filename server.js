const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const session = require("express-session");

console.log("PID: ", process.pid);

const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    autoRemove: 'interval',
      autoRemoveInterval: 10 // In minutes
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// use stylesheets found in public folder
app.use(express.static(path.join(__dirname, "public")));

// turn on controllers
app.use(require("./controllers"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port: ", PORT));
});
