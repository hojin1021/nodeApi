const indexController = require("../controller/indexConroller");

exports.indexRouter = function (app) {
  app.get("/students", indexController.readStudents);
  app.post("/student", indexController.createStudents);
  app.get("/lectures", indexController.readLectures);
};