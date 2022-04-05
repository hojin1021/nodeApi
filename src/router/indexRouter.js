const indexController = require("../controller/indexConroller");

exports.indexRouter = function (app) {
  app.get("/api/students", indexController.readStudents);
  app.post("/api/student", indexController.createStudents);
  app.get("/api/lectures", indexController.readLectures);
};