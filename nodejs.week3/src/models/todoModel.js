const fs = require('fs');

const todoDataPath = './data/todo.json';

const getAllTodos = () => {
    const todosData = fs.readFileSync(todoDataPath, 'utf8');
    return JSON.parse(todosData);
};

const writeTodosToFile = (todosData) => {
    fs.writeFileSync(todoDataPath, JSON.stringify(todosData, null, 2));
};

const TodoModel = {
    getAll: () => getAllTodos(),

    getById: (id) => {
        const todosData = getAllTodos();
        return todosData.find(todo => todo.id === id);
    },

    create: (newTodo) => {
        const todosData = getAllTodos();
        const id = todosData.length > 0 ? todosData[todosData.length - 1].id + 1 : 1;
        const todoWithId = { id, ...newTodo };
        todosData.push(todoWithId);
        writeTodosToFile(todosData);
        return todoWithId;
    },

    update: (id, updatedTodo) => {
        const todosData = getAllTodos();
        const index = todosData.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todosData[index] = { id, ...updatedTodo };
            writeTodosToFile(todosData);
            return todosData[index];
        }
        return null;
    },

    delete: (id) => {
        let todosData = getAllTodos();
        todosData = todosData.filter(todo => todo.id !== id);
        writeTodosToFile(todosData);
        return true;
    }
};

module.exports = TodoModel;
