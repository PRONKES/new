var express = require("express");
var blogControle = require("../db/controllers/blogControle.js");
var router = express.Router();
var multer = require("multer");
const { getUserByEmail } = require("../db/models/users.js");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./api/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage });
router.post("/", upload.single("image"), function(req, res) {
  const obj = {
    title: req.body.title,
    image: req.file.originalname,
    body: req.body.body
  };
  blogControle.create(obj, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/").get(function(req, res) {
  blogControle.read((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/:id").put(function(req, res) {
  const obj = {
    description: req.body.description,
    price: req.body.price
  };
  if (req.file !== undefined) {
    obj.image = req.file.originalname;
  }
  blogControle.update(req.params.id, req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/:id").delete((req, res) => {
  blogControle.delete(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
module.exports = router;
