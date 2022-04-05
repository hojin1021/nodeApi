const indexController = require("../controller/indexConroller");
const { jwtMiddleware } = require("../../jwtMiddleware");

exports.indexRouter = function (app) {
  app.get("/students", indexController.readStudents);
  app.post("/student", indexController.createStudents);
};