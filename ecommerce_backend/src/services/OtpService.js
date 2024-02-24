const Otp = require("../models/OtpModel");
// const bcrypt = require("bcrypt");
const EmailService = require("./EmailService");
const createOtp = (newOtp) => {
  return new Promise(async (resolve, reject) => {
    const { email, otp } = newOtp;
    try {
      const createOtp = await Otp.create({
        email,
        otp,
      });
      if (createOtp) {
        await EmailService.sendEmailOtp(email, otp);

        resolve({
          status: "OK",
          message: "success",
          data: createOtp,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteOtp = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOtp = await Otp.findOne({
        _id: id,
      });
      if (checkOtp === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      await Otp.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOtp,
  deleteOtp,
};
