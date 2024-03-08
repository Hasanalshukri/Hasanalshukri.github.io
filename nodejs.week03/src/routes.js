const express = require('express');
const router = express.Router();
const TodoModel = require('./models/todoModel');
const validateTodo = require('./middleware/validate');

// GET all todos
router.get('/todos', (req, res) => {
    const todos = TodoModel.getAll();
    res.json(todos);
});

// GET todo by ID
router.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = TodoModel.getById(parseInt(id));
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
});

// CREATE a new todo
router.post('/todos', validateTodo, (req, res) => {
    const newTodo = req.body;
    const todo = TodoModel.create(newTodo);
    res.status(201).json(todo);
});

// UPDATE a todo by ID
router.put('/todos/:id', validateTodo, (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    const todo = TodoModel.update(parseInt(id), updatedTodo);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
});

// DELETE a todo by ID
router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const success = TodoModel.delete(parseInt(id));
    if (!success) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(204).send();
});

module.exports = router;
