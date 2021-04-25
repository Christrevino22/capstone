const express = require("express");
const router = express.Router();
const {
  create,
  update,
  remove,
  show,
  list,
} = require("../../controllers/furniture");

router.get("/furniture", list);

router.get("/furniture/:id", show);

router.post("/furniture", create);

router.put("/furniture/:id", update);

router.delete("/furniture/:id", remove);

module.exports = router;
