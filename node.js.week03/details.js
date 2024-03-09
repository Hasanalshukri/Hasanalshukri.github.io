// details.js

const axios = require('axios');

async function getTodoDetails(id) {
  try {
    const response = await axios.get(`http://localhost:3000/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Todo details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { getTodoDetails };
