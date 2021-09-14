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
// 获取一个人员信息通过姓名
router.get("/:userName", person.getPersonByName);
// 获取一个人员信息通过姓名和密码
router.get("/:userName/:password", person.getPersonByNameAndPwd);

module.exports = router;