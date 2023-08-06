import db from "../models/index";
import CRUDServices from "../services/CRUDservices";
let homePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  // req.body :tra ra tham số điền form client req in ra
  let result = await CRUDServices.createUser(req.body);
  console.log(result);
  return res.send(" xin chao crud");
};

module.exports = {
  getHomePage: homePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
