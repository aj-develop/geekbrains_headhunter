const format = require('pg-format');
const dataBaseQuery = require('../db/modules/query');
const token = require('./tokenHandler');
const DB_CONFIG = require('../db/dataBaseConfig');
const crypto = require('../utils/crypto');

async function getFromDB(dataBase, payload) {
    try {
        const sql = `SELECT * FROM %I WHERE %I = %L`;
        const result = await dataBaseQuery(dataBase, format(sql,
            `${DB_CONFIG.tableUsers}`, Object.keys(payload), Object.values(payload)));
        if (result && result.rows && result.rows.length) {
            return result.rows[0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.log('==> get user fail ' + err);
        return null;
    }
}

async function addToDB(dataBase, newUser) {
    try {
        const sql = `INSERT INTO %I(%s) VALUES (%L)`
        const result = await dataBaseQuery(dataBase, format(sql,
            `${DB_CONFIG.tableUsers}`, Object.keys(newUser).toString(), Object.values(newUser)));
        return result ? result : null;
    }
    catch (err) {
        console.log('==> add user fail ' + err);
        return null;
    }
}

async function updateDB(dataBase, payload, req) {
    try {
        const newParam = JSON.parse(crypto.decrypt(req.body.user));
        const sql = `UPDATE %I SET %I = %L WHERE %I = %L`;
        const result = await dataBaseQuery(dataBase, format(sql,
            `${DB_CONFIG.tableUsers}`, Object.keys(newParam), Object.values(newParam), 'id', req.params.id));
        return (result);
    }
    catch (err) {
        console.log('==> failed update user ' + err);
        return null;
    }
}

async function login(dataBase, req, res) {
    let userStr = crypto.decrypt(req.body.user);
    const [login, password, action] = userStr.split(':');
    try {
        let curUser = await getFromDB(dataBase, { login });
        if (curUser && action === 'register') {
            res.json({ message: 'User login is already in use' });
            return false;
        }
        if ((!curUser || (curUser && curUser.password !== password)) && action === 'login') {
            res.json({ message: 'User not found' });
            return false;
        }
        if (!curUser) {
            curUser = {
                name: `${login}Name`,
                secret: `${login}Secret`,
                login: login,
                password: password
            };
            const result = await addToDB(dataBase, curUser);
            if (!result) {
                res.json({ message: 'User login failed' });
                return false;
            }
        }
        const curToken = await token.addToDB(dataBase, curUser);
        if (curToken) {
            res.status(200).json({ token: curToken.token, user: crypto.encrypt(JSON.stringify(curUser)) });
            return true;
        }
    }
    catch (err) {
        console.log(`==> fail ${action}` + err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getFromDB, addToDB, updateDB, login };
