const person = require("../controllers/person");
const express = require("express");
const router = express.Router();

// 新增人员信息
router.post("/", person.create);
// 删除人员信息
router.delete("/:id", person.deletePersonByID);
// 修改人员信息
router.put("/:id", person.updatePersonByID);
// 获取所有人员信息
router.get("/", person.getAll);

module.exports = router;