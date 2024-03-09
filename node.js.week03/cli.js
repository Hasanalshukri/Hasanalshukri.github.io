const readline = require('readline');
const { listTodos, addTodo, updateTodo, deleteTodo } = require('./todosController');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display menu and prompt user for input
const displayMenu = () => {
  console.log('*** Todo CLI Application ***');
  console.log('Available commands:');
  console.log('list: Lists all Todos');
  console.log('add <todo>: Adds a new Todo');
  console.log('update <id> <todo>: Updates a Todo');
  console.log('delete <id>: Deletes a Todo');
  console.log('end: Exits the application');

  rl.question('Enter a command: ', async (input) => {
    await handleCommand(input);
    displayMenu();
  });
};

// Function to handle user input commands
const handleCommand = async (input) => {
  const args = input.split(' ');
  const command = args[0];

  switch (command) {
    case 'list':
      await listTodos();
      break;
    case 'add':
      if (args.length < 2) {
        console.log('Invalid input. Usage: add <todo>');
        break;
      }
      await addTodo(args.slice(1).join(' '));
      break;
    case 'update':
      if (args.length < 3) {
        console.log('Invalid input. Usage: update <id> <todo>');
        break;
      }
      await updateTodo(args[1], args.slice(2).join(' '));
      break;
    case 'delete':
      if (args.length < 2) {
        console.log('Invalid input. Usage: delete <id>');
        break;
      }
      await deleteTodo(args[1]);
      break;
    case 'end':
      console.log('Exiting the application...');
      rl.close();
      process.exit();
      break;
    default:
      console.log('Invalid command');
  }
};

// Function to start the CLI application
const startCli = () => {
  displayMenu();
};

module.exports = { startCli };
