const mssql = require('mssql')
const config = require('./config')

module.exports = {
    executeSQL: function (sqlStr, cb) {
        mssql.connect(config, err => {
            if (err) {
                cb(err, null)
            }
            new mssql.Request().query(sqlStr, (err, result) => {
                if (err) return cb(err, null)

                let resultData = {}
                if (result && result.recordsets) {
                    resultData.status = 'success',
                    resultData.data = result.recordsets[0] || []
                } else {
                    resultData.status = 'error',
                    resultData.data = null
                }
                cb(null, resultData)
            })
        })

        mssql.on('error', err => {
            // ... error handler
            cb(err, null)
        })
    },
    callback: function (err, result, res) {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(result);
        }
    }
}