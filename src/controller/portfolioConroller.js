const portfolioDao = require("../dao/portfolioDao");
exports.readPortfolio = async (req, res)=>{
  const selectPortfolioRows = await portfolioDao.selectPortfolio();
  return res.send({
    result: selectPortfolioRows,
    isSuccess: false,
    code: 200,
    message: "Portfolio list success!",
  });
};

exports.createPortfolio = async (req, res)=>{
  const {subject,work,skill,service,eSubject} = req.body;
  const insertPortfolioRow = await portfolioDao.insertPortfolio(
    subject,work,skill,service,eSubject
  );
  return res.send({
    isSuccess: false,
    code: 200,
    message: insertPortfolioRow,
  });
};

exports.updatePortfolio = async function (req, res) {
  let { idportfolio, subject,work,skill,service,eSubject } = req.body;
  const updatePortfolioRow = await portfolioDao.updatePortfolio(
    idportfolio,
    subject,
    work,
    skill,
    service,
    eSubject
  );
  if (!updatePortfolioRow) {
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

exports.deletePortfolio = async function (req, res) {
  //const { userIdx } = req.verifiedToken;
  const { idportfolio } = req.params;
  const deletePortfolioRow = await portfolioDao.deletePortfolio(idportfolio);
  if (!deletePortfolioRow) {
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