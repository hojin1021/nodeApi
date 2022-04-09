const { pool } = require("../../database");
exports.selectPortfolio = async ()=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const selectPortfolioQuery = "SELECT * FROM portfolio;";

      const [row] = await connection.query(selectPortfolioQuery);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### selectPortfolio Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### selectPortfolio DB error #####`);
    return false;
  }
};

exports.insertPortfolio = async (subject,work,skill,service,eSubject)=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const query = "INSERT INTO portfolio(subject,work,skill,service,eSubject) VALUES (?,?,?,?,?);";
      const params = [subject,work,skill,service,eSubject];

      const [row] = await connection.query(query, params);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### insertPortfolio Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### insertPortfolio DB error #####`);
    return false;
  }
}
exports.updatePortfolio = async (idportfolio, subject,work,skill,service,eSubject) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const updatePortfolioQuery =
        "update portfolio set subject = ifnull(?, subject), work = ifnull(?, work), skill = ifnull(?, skill), service = ifnull(?, service), eSubject = ifnull(?, eSubject) where idportfolio= ?;";
      const updatePortfolioParams = [subject,work,skill,service,eSubject,idportfolio];
      const [row] = await connection.query(updatePortfolioQuery, updatePortfolioParams);
      console.log(row)
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updatePortfolio Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updatePortfolio DB error ##### \n ${err}`);
    return false;
  }
};
exports.deletePortfolio = async idportfolio => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const deletePortfolioQuery =
        "delete from portfolio where idportfolio= ?;";
      const deletePortfolioParams = [idportfolio];
      const [row] = await connection.query(deletePortfolioQuery, deletePortfolioParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deletePortfolio Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deletePortfolio DB error ##### \n ${err}`);
    return false;
  }
};