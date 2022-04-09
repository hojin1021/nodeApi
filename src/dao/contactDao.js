const { pool } = require("../../database");

exports.selectContact = async ()=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const selectContactQuery = "SELECT * FROM contact;";

      const [row] = await connection.query(selectContactQuery);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### selectContact Query error ##### `);
      connection.release();
      return false; 
    }
  } catch (error) {
    console.error(` ##### selectContact DB error #####`);
    return false;
  }
};

exports.insertContact = async (name,email,subject,message)=>{
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const query = "INSERT INTO contact(company,period,work,eName) VALUES (?,?,?,?);";
      const params = [name,email,subject,message];

      const [row] = await connection.query(query, params);
      connection.release();
      return row;
    } catch (error) {
      console.error(` ##### insertContact Query error ##### `);
      connection.release();
      return false;
    }
  } catch (error) {
    console.error(` ##### insertContact DB error #####`);
    return false;
  }
}

exports.updateContact = async (idcontact, name,email,subject,message) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const updateContactQuery =
        "update contact set name = ifnull(?, name), email = ifnull(?, email), subject = ifnull(?, subject), message = ifnull(?, message) where idcontact= ?;";
      const updateContactParams = [name,email,subject,message,idcontact];
      const [row] = await connection.query(updateContactQuery, updateContactParams);
      console.log(row)
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### updateContact Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### updateContact DB error ##### \n ${err}`);
    return false;
  }
};
exports.deleteContact = async idcontact => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const deleteContactQuery =
        "delete from contact where idcontact= ?;";
      const deleteContactParams = [idcontact];
      const [row] = await connection.query(deleteContactQuery, deleteContactParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` ##### deleteContact Query error ##### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` ##### deleteContact DB error ##### \n ${err}`);
    return false;
  }
};