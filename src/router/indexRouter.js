const portfolioConroller = require("../controller/portfolioConroller");
const workConroller = require("../controller/workConroller");
const contactConroller = require("../controller/contactConroller");

exports.indexRouter = function (app) {
  app.get('/portfolios', portfolioConroller.readPortfolio);
  app.post("/portfolio", portfolioConroller.createPortfolio);
  app.delete("/deleteportfolio/:idportfolio", portfolioConroller.deletePortfolio);
  app.patch("/updateportfolio", portfolioConroller.updatePortfolio);
  app.get('/works', workConroller.readWork);
  app.post('/work', workConroller.createWork);
  app.delete("/deletework/:idwork", workConroller.deleteWork);
  app.patch("/updatework", workConroller.updateWork);
  app.get('/contacts', contactConroller.readContact);
  app.post('/contact', contactConroller.createContact);
  app.delete("/deletecontact/:idcontact", contactConroller.deleteContact);
  app.patch("/updatecontact", contactConroller.updateContact);
};