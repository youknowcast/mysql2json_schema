# mysql2json_schema

convert mysql tables to json schema using [node-mysqlspec](https://github.com/okunishinishi/node-mysqlspec)

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

## Configure app

use dotenv.
like above:

```
MYSQL_USER=root
MYSQL_PASSWD=
MYSQL_HOST=127.0.0.1
MYSQL_DATABASE=mydatabase
MYSQL_TABLE=mytable

SCHEMA_PREFIX=mytable
```

- `MYSQL_TABLE` is optional, default; schema of all tables are dumped.
- `SCHEMA_PREFIX` is optional, default; `schema.json` file is created.

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build