const path = require('path');
const util = require('util');
const mysql = require('mysql');
const express = require("express");
const { uniqueNamesGenerator, names } = require('unique-names-generator');


const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};

const insertRandomName = async () => {
  const connection = mysql.createConnection(config);
  const query = util.promisify(connection.query).bind(connection);

  const randomName = uniqueNamesGenerator({ dictionaries: [names] });
  const sql = `INSERT INTO people(name) values('${randomName}')`;
  try {
    await query(sql);
  } catch (err) {
    connection.end();
    throw err;
  } finally {
    connection.end();
  }  
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(async (req, res, next) => {
  await insertRandomName();
  next();
});

app.get('/',async (req,res) =>{
  const connection = mysql.createConnection(config);
  const query = util.promisify(connection.query).bind(connection);
  const sql = `SELECT * FROM people`;
  try {
    const people = await query(sql);
    res.render('index',{
      title:'Full Cycle Rocks!',
      people,
    });
  } catch (err) {
    connection.end();
    throw err
  } finally {
    connection.end();
  }  
});

app.listen(port,() =>{
  console.log("[express] rodando na porta:"+port);
})