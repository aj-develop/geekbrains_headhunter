const format = require('pg-format');
const DB_CONFIG = require('../dataBaseConfig');
const dataBaseQuery = require('./query');

const userArr = [
    { name: 'userName', secret: 'userSecret', login: 'user', password: 'user' }
]


async function createTable(dbConnection, sql, tableName) {
    try {
        const result = await dataBaseQuery(dbConnection, format(sql, `${tableName}`));
        if (result) {
            console.log(`==> table "${tableName}" created/used`);
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(`==> table "${tableName}" create fail ` + err);
        dbConnection.end()
        return false;
    }
}

async function fillTable(dbConnection, arr, tableName) {
    try {
        const sql = `INSERT INTO %I(%s) VALUES (%L)`;
        let result = null;
        for (let item of arr) {
            result = await dataBaseQuery(dbConnection, format(sql,
                `${tableName}`, Object.keys(item).toString(), Object.values(item)));
            if (!result)
                break;
        }
        if (result) {
            console.log(`==> table "${tableName}" is filled in`);
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(`==> table "${tableName}" fill fail ` + err);
        return false;
    }
}

module.exports = async (dbConnection) => {
    try {
        const sqlTableUsers = `CREATE TABLE if not exists %I(
            id serial PRIMARY KEY,
            name varchar(64) not null,
            secret varchar(255) not null,
            login varchar(255) not null UNIQUE,
            password varchar(255) not null,
            sessionid text DEFAULT null 
          )`;
        const result = await createTable(dbConnection, sqlTableUsers, DB_CONFIG.tableUsers);
        await fillTable(dbConnection, userArr, DB_CONFIG.tableUsers);
        if (result) {
            const sqlTableVacancies = `CREATE TABLE if not exists %I(
                id serial PRIMARY KEY,
                provider varchar(32)
                origin_id varchar(64) not null,
                name varchar(64) not null,
                logo_url varchar(128) DEFAULT null,
                salary int4range DEFAULT null,
                currency varchar(3) DEFAULT null,
                published_at timestamptz,
                area varchar(32),
                requirement text,
                responsibility text,
                user_id int not null,
                pinned boolean DEFAULT false
              )`;
            const result = await createTable(dbConnection, sqlTableVacancies, DB_CONFIG.tableVacancies);
            return result ? true : false;
        }
        return false;
    }
    catch (err) {
        dbConnection.end()
        return false;
    }
}
