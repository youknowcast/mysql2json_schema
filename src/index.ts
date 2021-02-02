import * as fs from 'fs'
import mysqlspec = require('mysqlspec')

require('dotenv').config()
const env = process.env

// Mysql connect config.
var config = {
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWD,
    host: env.MYSQL_HOST,
    database: env.MYSQL_DATABASE
};
const prefix = env.SCHEMA_PREFIX
const filename = prefix !== '' ? `${prefix}_schema.json` : 'schema.json'

function callback(err: Error, schema) {
  try {
    fs.writeFileSync(filename, JSON.stringify(schema, null, 2))
  } catch (e) {
    console.log(e)
  }
}

const table = env.MYSQL_TABLE
if (table !== '') {
  mysqlspec(config, env.MYSQL_DATABASE, table, callback)
} else {
  mysqlspec(config, env.MYSQL_DATABASE, callback)
}
