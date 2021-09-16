const executeSQL = require('../db/connect').executeSQL
const callback = require('../db/connect').callback
const moment = require('moment')

/**新增人员信息 */
exports.create = (req, res) => {

  const p = {
    name: req.body.userName || '',
    pwd: req.body.pwd || '',
    insertTime: moment(new Date()).format('yyyy-MM-DD HH:mm:ss')
  }
  
  const ssql = `insert into sys_users (userName, pwd, insertTime) values ('${p.name}', '${p.pwd}', '${p.insertTime}')`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**删除人员信息 */
exports.deletePersonByID = (req, res) => {
  const id = req.params.id;
  const ssql = 'delete from sys_users where id = ' + id;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**修改人员信息 */
exports.updatePersonByID = (req, res) => {
  const id = req.params.id;
  const name = req.params.userName;
  const pwd = req.params.password;

  const ssql = `'update sys_users set userName = '${name}' and pwd = '${pwd}' where id = ${id}`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取所有人员信息 */
exports.getAll = (req, res) => {
  const ssql = 'select * from sys_users'
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取一个人员信息 */
exports.getPersonByName = (req, res) => {
  const userName = req.params.userName;
  const ssql = `select * from sys_users where userName = '${userName}'`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取一个人员信息 */
exports.getPersonByNameAndPwd = (req, res) => {
  const userName = req.params.userName;
  const pwd = req.params.password;
  const ssql = `select * from sys_users where userName = '${userName}' and pwd = '${pwd}'`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

