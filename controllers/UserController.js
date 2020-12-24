const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.addUser = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;

    //field validation
    const validationErr = validationResult(req);
    if (validationErr.errors.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }

    // save user
    const user = new User({
      firstName,
      lastName,
      phone,
    });

    const addedUser = await user.save({ new: true });
    res.status(200).json(addedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};
