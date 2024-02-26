import { defineRoute, router } from './utils/define-route.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// In-memory stores
let users = {};
let posts = {};

// Path to JSON files
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
const postsFilePath = path.join(__dirname, '..', 'data', 'posts.json');

// Function to load data from files into memory
const loadDataFromFile = async () => {
  try {
    const usersData = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(usersData || '{}');

    const postsData = await fs.readFile(postsFilePath, 'utf8');
    posts = JSON.parse(postsData || '{}');
  } catch (error) {
    console.message('Failed to load data from files', message);
    users = {};
    posts = {};
  }
};

// Immediately invoke to load data at app startup
loadDataFromFile();

// Function to save data to files
const saveDataToFile = async () => {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
    await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');
  } catch (error) {
    console.error('Failed to save data to files', error);
  }
};

// CRUD operations for users
defineRoute('GET', '/users', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(Object.values(users)));
});

defineRoute('GET', '/users:id', (req, res) => {
  const { id } = req.params;
  if (users[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(users[id]));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
});

defineRoute('POST', '/users', async (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', async () => {
    try {
      const userData = JSON.parse(body);
      const id = Date.now().toString(); // Simple ID generation
      users[id] = { id, ...userData };
      await saveDataToFile(); // Save after adding
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.end(JSON.stringify(users[id]));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ message: 'Invalid user data' }));
    }
  });
});

defineRoute('PATCH', '/users/:id', (req, res) => {
  const { id } = req.params;
  if (!users[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    try {
      const updates = JSON.parse(body);
      users[id] = { ...users[id], ...updates };
      await saveDataToFile(); // Save after update
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(users[id]));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ message: 'Invalid user data' }));
    }
  });
});

defineRoute('DELETE', '/users/:id', async (req, res) => {
  const { id } = req.params;
  if (!users[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
    return;
  }

  delete users[id];
  await saveDataToFile(); // Save after deletion
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 204;
  res.end();
});

// Similar CRUD operations should be implemented for posts, following the same pattern as users

// Example POST CRUD operations
defineRoute('POST', '/posts', async (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    try {
      const postData = JSON.parse(body);
      const id = Date.now().toString();
      posts[id] = { id, ...postData };
      await saveDataToFile(); // Save after adding
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.end(JSON.stringify(posts[id]));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ message: 'Invalid post data' }));
    }
  });
});

// Implement GET, PATCH, DELETE for posts in a similar manner to users

// CRUD operations for users
defineRoute('GET', '/posts', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(Object.values(users)));
});

defineRoute('GET', '/posts/:id', (req, res) => {
  const { id } = req.params;
  if (posts[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(posts[id]));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
});

defineRoute('PATCH', '/posts/:id', (req, res) => {
  const { id } = req.params;
  if (!posts[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    try {
      const updates = JSON.parse(body);
      posts[id] = { ...posts[id], ...updates };
      await saveDataToFile(); // Save after update
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(posts[id]));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ message: 'Invalid user data' }));
    }
  });
});

defineRoute('DELETE', '/posts/:id', async (req, res) => {
  const { id } = req.params;
  if (!posts[id]) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'User not found' }));
    return;
  }

  delete posts[id];
  await saveDataToFile(); // Save after deletion
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 204;
  res.end();
});

// Export the router for use in the main app
export default router;
