const indexDao = require("../dao/indexDao");

exports.createStudents = async (req, res)=>{
  const {studentsName,major,address,birth} = req.body;
  const insertStudentsRow = await indexDao.insertStudent(
    studentsName,major,address,birth
  );
  return res.send({
    isSuccess: false,
    code: 200,
    message: "학생 입력 성공!",
  });
};

exports.readStudents = async (req, res)=>{
  const selectStudentsRows = await indexDao.selectStudents();
  return res.send({
    result: selectStudentsRows,
    isSuccess: false,
    code: 200,
    message: "학생 목록 조회 성공!",
  });
};

exports.readLectures = async (req, res)=>{
  const selectLecturesRows = await indexDao.selectLectures();
  return res.send({
    result: selectLecturesRows,
    isSuccess: false,
    code: 200,
    message: "강의 목록 조회 성공!",
  });
};