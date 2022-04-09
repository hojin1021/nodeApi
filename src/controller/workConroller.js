const workDao = require("../dao/workDao");
exports.readWork = async (req, res)=>{
  const selectWorkRows = await workDao.selectWork();
  return res.send({
    result: selectWorkRows,
    isSuccess: false, 
    code: 200,
    message: "work list success!",
  });
};

exports.createWork = async (req, res)=>{
  const {company,period,work,eName} = req.body;
  const insertWorkRow = await workDao.insertWork(
    company,period,work,eName
  );
  return res.send({
    isSuccess: false,
    code: 200,
    message: "Work input success!",
  });
};


exports.updateWork = async function (req, res) {
  let { idwork, company,period,work,eName } = req.body;
  const updateWorkRow = await workDao.updateWork(
    idwork,
    company,
    period,
    work,
    eName
  );
  if (!updateWorkRow) {
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

exports.deleteWork = async function (req, res) {
  //const { userIdx } = req.verifiedToken;
  const { idwork } = req.params;
  const deleteWorkRow = await workDao.deleteWork(idwork);
  if (!deleteWorkRow) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "work delete fail!",
    });
  }
  return res.send({
    isSuccess: true,
    code: 200,
    message: "work delete success!",
  });
};