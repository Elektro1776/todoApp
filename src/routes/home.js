const express = require('express');
const router = express.Router();
const task = require('../model/toDos')();
router.get('/', (req, res) => {
  task.getAllTodos((todos) => {
    res.render('index.hbs', {title: 'BAMF TODOS', todos })
  })
});
router.get('/about', (req, res) => {
  res.render('about', {title: 'About Me!'})
})
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact'})
})

router.get('/sweeeet', function (req, res) {
  res.render('sweet', {fucks: 'so many fucks'})
})
module.exports = router;
