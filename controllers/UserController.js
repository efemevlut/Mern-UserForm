const User = require("../models/User");

module.exports.addUser = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;

    //TODO validation

    // save user
    const user = new User({
      firstName,
      lastName,
      phone,
    });

    const addedUser = await user.save({ new: true });
    res.status(200).send("User added");
  } 
  catch (err) {
    return res.status(500).json(addedUser);
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}).where("status", /[^created]/);
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};