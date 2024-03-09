const axios = require('axios');

const API_URL = 'http://localhost:3000/api/todos';

// Function to list all Todos
const listTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Todos:');
    response.data.forEach(todo => {
      console.log(`- ${todo.id}: ${todo.title} (${todo.completed ? 'Completed' : 'Not completed'})`);
    });
  } catch (error) {
    console.error('Failed to fetch Todos:', error.message);
  }
};

// Function to add a new Todo
const addTodo = async (todoText) => {
  try {
    const response = await axios.post(API_URL, { title: todoText });
    console.log(`New Todo added with id ${response.data.id}`);
  } catch (error) {
    console.error('Failed to add Todo:', error.message);
  }
};

// Function to update a Todo
const updateTodo = async (id, todoText) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { title: todoText });
    console.log(`Todo with id ${id} updated`);
  } catch (error) {
    console.error('Failed to update Todo:', error.message);
  }
};

// Function to delete a Todo
const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`Todo with id ${id} deleted`);
  } catch (error) {
    console.error('Failed to delete Todo:', error.message);
  }
};

module.exports = {
  listTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
