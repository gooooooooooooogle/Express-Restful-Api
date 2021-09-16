const users = require("../controllers/sys_users");
const express = require("express");
const router = express.Router();

// 新增人员信息
router.post("/", users.create);
// 删除人员信息
router.delete("/:id", users.deletePersonByID);
// 修改人员信息
router.put("/:id", users.updatePersonByID);
// 获取所有人员信息
router.get("/", users.getAll);
// 获取一个人员信息通过姓名
router.get("/:userName", users.getPersonByName);
// 获取一个人员信息通过姓名和密码
router.get("/:userName/:password", users.getPersonByNameAndPwd);

module.exports = router;