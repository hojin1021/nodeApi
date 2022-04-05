const { pool } = require("../../database");

exports.insertStudent = async (studentsName,major,address,birth)=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const query = "INSERT INTO Students(studentsName, major, address, birth) VALUES (?,?,?,?);";
      const params = [studentsName,major,address,birth];

      const [row] = await connection.query(query, params);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### getStudentsRows Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### getStudentsRows DB error #####`);
    return false;
  }
}

exports.selectStudents = async ()=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const selectStudentsQuery = "SELECT * FROM Students;";

      const [row] = await connection.query(selectStudentsQuery);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### getStudentsRows Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### getStudentsRows DB error #####`);
    return false;
  }
};

exports.selectLectures = async ()=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const selectLecturesQuery = "SELECT * FROM Lectures;";

      const [row] = await connection.query(selectLecturesQuery);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### getLecturesRows Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### getLecturesRows DB error #####`);
    return false;
  }
};