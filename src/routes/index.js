const member = require("./member.route");
const quote = require("./quote.route");
const hero = require("./hero.route");
const client = require("./client.route");
const auth = require("./auth.route");
const project = require("./Project.route");
const ejs_client = require("./ejs-routes/client");
const ejs_hero = require("./ejs-routes/hero");
const ejs_members = require("./ejs-routes/members");
const ejs_project = require("./ejs-routes/project");
const ejs_quote = require("./ejs-routes/quote");
const admin = require("./ejs-routes/admin");
// =====================

const clientController = require("./ejs.controller/client.route");
const heroController = require("./ejs.controller/hero.route");
const membersController = require("./ejs.controller/members.route");
const projectController = require("./ejs.controller/project.route");
const quoteController = require("./ejs.controller/quote.route");
module.exports = [
  member,
  quote,
  hero,
  client,
  auth,
  project,
  ejs_client,
  ejs_hero,
  ejs_members,
  ejs_project,
  ejs_quote,
  admin,
  clientController,
  heroController,
  membersController,
  projectController,
  quoteController,
];
