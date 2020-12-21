const { check } = require("express-validator");

exports.userValidation = [
  check(
    "firstName",
    "Please enter a first name minumum 2 and maximum 20 chars"
  ).isLength({ min: 2, max: 20 }),
  check(
    "lastName",
    "Please enter a last name minimum 2 and maximum 20 chars"
  ).isLength({ min: 2, max: 20 }),
  check("phone", "Please enter a phone number 10 chars").isLength({
    max: 10,
    min: 10,
  }),
];
