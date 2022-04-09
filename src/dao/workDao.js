const { pool } = require("../../database");
exports.selectWork = async ()=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const selectWorkQuery = "SELECT * FROM work;";

      const [row] = await connection.query(selectWorkQuery);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### selectWork Query error ##### `);
      connection.release();
      return false; 
    }
  } catch (error) {
    console.error(` ##### selectWork DB error #####`);
    return false;
  }
};

exports.insertWork = async (company,period,work,eName)=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const query = "INSERT INTO work(company,period,work,eName) VALUES (?,?,?,?);";
      const params = [company,period,work,eName];

      const [row] = await connection.query(query, params);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### insertWork Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### insertWork DB error #####`);
    return false;
  }
}
exports.updateWork = async (idwork, company,period,work,eName) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const updateWorkQuery =
        "update work set company = ifnull(?, company), period = ifnull(?, period), work = ifnull(?, work), eName = ifnull(?, eName) where idwork= ?;";
      const updateWorkParams = [company,period,work,eName,idwork];
      const [row] = await connection.query(updateWorkQuery, updateWorkParams);
      console.log(row)
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateWork Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateWork DB error ##### \n ${err}`);
    return false;
  }
};
exports.deleteWork = async idwork => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const deleteWorkQuery =
        "delete from work where idwork= ?;";
      const deleteWorkParams = [idwork];
      const [row] = await connection.query(deleteWorkQuery, deleteWorkParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteWork Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteWork DB error ##### \n ${err}`);
    return false;
  }
};