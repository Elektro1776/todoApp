// const mysql = require('mysql');
// const config = require('../../config.js');
const dataAccess = require('../data/dataAccess')();
// const connection = mysql.createConnection(config);

// console.log(' WHAT IS MYSQL', connection);
const task = () => {
  const that = {};
  console.log(' TASK CREATED');
  // dbCon.connect(() => console.log('Connected!'))
  function getAllTodos(cb) {
    dataAccess.getTodos().then((todos) => {
      cb(todos);
    }).catch((err) => console.log(' ERRR', err))
  }
  function createToDo(todo) {
    dataAccess.createToDo(todo);
  }
  that.getAllTodos = getAllTodos;
  that.createToDo = createToDo;
  return that
}

module.exports = task
