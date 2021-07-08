const router = require("express").Router();
const Donation = require("../models/Donation.js");

router.post("/", async (req, res) => {
  const { firstName, lastName, email, comment, amount } = req.body;
  try {
    let donation = new Donation({
      firstName,
      lastName,
      email,
      comment,
      amount,
    });
    await donation.save();
    return res.json(donation);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
