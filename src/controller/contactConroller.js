const contactDao = require("../dao/contactDao");
exports.readContact = async (req, res)=>{
  const selectContactRows = await contactDao.selectContact();
  return res.send({
    result: selectContactRows,
    isSuccess: false, 
    code: 200,
    message: "Contact list success!",
  });
};

exports.createContact = async (req, res)=>{
  const {name,email,subject,message} = req.body;
  const insertContactRow = await contactDao.insertContact(
    name,email,subject,message
  );
  return res.send({
    isSuccess: false,
    code: 200,
    message: "Contact input success!",
  });
};

exports.updateContact = async function (req, res) {
  let { idcontact, name,email,subject,message } = req.body;
  const updateContactRow = await contactDao.updateContact(
    idcontact,
    name,
    email,
    subject,
    message
  );
  if (!updateContactRow) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "수정 실패. 관리자에게 문의해주세요.",
    });
  }

  return res.send({
    isSuccess: true,
    code: 200,
    message: "수정 성공",
  });
};

exports.deleteContact = async function (req, res) {
  //const { userIdx } = req.verifiedToken;
  const { idcontact } = req.params;
  const deleteContactRow = await contactDao.deleteContact(idcontact);
  if (!deleteContactRow) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "delete fail!",
    });
  }
  return res.send({
    isSuccess: true,
    code: 200,
    message: "delete success!",
  });
};