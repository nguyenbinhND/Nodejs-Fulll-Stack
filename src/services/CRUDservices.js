var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
import db from "../models/index";
let createUser = async (data) => {
  return new Promise(async (resole, reject) => {
    try {
      let hashUserPasswordBcrypt = await hashUserPassword(data.password);
      // console.log(data);
      // console.log(hashUserPasswordBcrypt);
      await db.User.create({
        email: data.email,
        password: hashUserPasswordBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      });
      resole("create successfully");
    } catch (err) {
      reject();
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resole, reject) => {
    try {
      var hash = await bcrypt.hashSync("B4c0//", salt);
      resole(hash);
    } catch (err) {
      reject();
    }
  });
};

module.exports = {
  createUser: createUser,
};
