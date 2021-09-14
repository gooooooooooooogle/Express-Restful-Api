const executeSQL = require('../db/connect').executeSQL
const callback = require('../db/connect').callback

/**新增人员信息 */
exports.create = (req, res) => {
  const p = {
    name: req.body.name || '',
    sex: req.body.sex || '',
    age: req.body.age || '',
    password: req.body.password || '',
    confirmPassword: req.body.confirmPassword || ''
  }

  const ssql = `insert into test_person (name, sex, age, password, confirmPassword) values 
                                        ('${p.name}', '${p.sex}', ${p.age}, '${p.password}', '${p.confirmPassword}')`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**删除人员信息 */
exports.deletePersonByID = (req, res) => {
  const id = req.params.id;
  const ssql = 'delete from test_person where id = ' + id;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**修改人员信息 */
exports.updatePersonByID = (req, res) => {
  const id = req.params.id;
  const ssql = 'update test_person set age = 18 where id = ' + id;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取所有人员信息 */
exports.getAll = (req, res) => {
  const ssql = 'select * from test_person'
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取一个人员信息 */
exports.getPersonByName = (req, res) => {
  const userName = req.params.userName;
  const ssql = `select * from test_person where name = '${userName}'`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

/**获取一个人员信息 */
exports.getPersonByNameAndPwd = (req, res) => {
  const userName = req.params.userName;
  const pwd = req.params.password;
  const ssql = `select * from test_person where name = '${userName}' and password = '${pwd}'`;
  executeSQL(ssql, (err, result) => {
    callback(err, result, res)
  })
}

