const path = require("path");
const validator = require("validator");

exports.createOrUpdateReviewValidator = async (req, res, next) => {
  try {
    const errors = [];

    if (validator.isEmpty(req.body.comment, { ignore_whitespace: false })) {
      errors.push("Please input the amount field");
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors: errors });
    }

    next();
  } catch (error) {
    res.status(401).json({ success: false, errors: ["Bad request"] });
  }
};
