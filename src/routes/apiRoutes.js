const express = require('express');
const router = express.Router();
const task = require('../model/toDos')();

router.post('/api/createToDo', (req, res) => {
  console.log(' WHAT IS OUR BODY TYPE ', req.body, typeof req.body);
    res.json(req.body);

    task.createToDo(req.body.todoName);
})
module.exports = router;
