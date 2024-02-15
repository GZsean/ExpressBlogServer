const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("../middleware/responseHandler");

const UserController = {
  getUser: async (req, res) => {
    try {
      const { name, password } = req.body;
      const UserInfo = await User.find({ name, password });
      const token = jwt.sign(
        { id: UserInfo._id, name: UserInfo.name, password: UserInfo.password },
        "your_secret_key",
        { expiresIn: "4h" },
      );
      sendResponse(res, 200, "success", { token });
    } catch (err) {
      sendResponse(res, 500, "Fail", { error: err.message });
    }
  },
};

module.exports = UserController;
