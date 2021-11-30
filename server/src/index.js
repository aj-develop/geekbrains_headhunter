const express = require('express');
const serveStatic = require('serve-static');
const nodeFetch = require('node-fetch');
// const fs = require('fs');
const dataBaseCreate = require('./modules/dataBaseHandler');
const handleRequest = require('./modules/requestHandler');

const app = express();
const port = process.env.PORT || 5005;

app.use(express.static(`${__dirname}/../../dist`));
app.use(serveStatic(__dirname + "/../../dist"));
app.use(express.json());

let dataBase;
dataBaseCreate().then((res) => (dataBase = res));

app.get('/vacancies', async (req, res) => {
    handleRequest(dataBase, req, res, 'get');
});
app.post('/vacancy', async (req, res) => {
    handleRequest(dataBase, req, res, 'add');
});
app.post('/vacancies', async (req, res) => {
    handleRequest(dataBase, req, res, 'addAll');
});
app.put('/vacancy/:id', async (req, res) => {
    handleRequest(dataBase, req, res, 'update');
});
app.delete('/vacancy/:id', async (req, res) => {
    handleRequest(dataBase, req, res, 'del');
});
app.delete('/vacancies', async (req, res) => {
    handleRequest(dataBase, req, res, 'delAll');
});
app.get('/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'getUser');
});
app.post('/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'login');
});
app.get('/provider', async (req, res) => {
    handleRequest(dataBase, req, res, 'provider');
});
   
// let protected = fs.readdirSync(`${__dirname}/../../dist`, 'utf-8');

// app.get("*", (req, res) => {
// let path = req.params['0'].substring(1)
// if (protected.includes(path)) {
//     res.sendFile(`${__dirname}/../../dist/${path}`);
// } else {
// res.sendFile(`${__dirname}/../../dist/index.html`);
// }
// });

app.listen(port, () => { console.log(`listen at port ${port}...`); });
