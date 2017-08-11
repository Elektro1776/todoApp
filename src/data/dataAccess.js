const mysql = require('mysql');
const config = require('../../config.js');

const connection = mysql.createConnection(config);

const dataAccess = () => {
  const that = {};
  // console.log(' TASK CREATED');
  function getTodos() {
      return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM todos", (err, results, fields) => {
          if(err) reject(err);
          resolve(results);
        });
      })
  }
  function createToDo(todo) {
    const newTodo = {
      items: todo,
    }
    connection.query('INSERT INTO todos SET ?', newTodo, (err, results, fields) => {
      if (err) {
        throw err;
      }

      console.log(' RESULTS', results);
    })
  }
  function updateToDo(id) {

  }
  function deleteToDo(id) {

  }
  that.getTodos = getTodos;
  that.createToDo = createToDo;
  return that
}

module.exports = dataAccess;
