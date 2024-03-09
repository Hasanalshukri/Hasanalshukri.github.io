# FooCoding CLI Application

This CLI application allows users to interact with the Todos API using various commands.

## Installation

  1. Clone the repository:

    ( git clone <repository_url> )

  2. Navigate to the project directory:

     ( cd foo-coding-cli )

  3. Install dependencies:

     ( npm install )

## Follow the on-screen instructions to use each command.

### Commands

* list: Lists all Todos from the API.
* add <todo>: Adds a new Todo to the API.
* update <id> <todo>: Updates the Todo with the specified ID with the new 
   text.
* delete <id>: Deletes the Todo with the specified ID.
* end or Ctrl+C: Exits the CLI application.


  ## Error Handling

Proper error handling is implemented for cases such as invalid input and failed API requests.

## Asynchronous Operations
   Asynchronous operations are handled gracefully using async/await.

## Input Validation
   Basic input validation is implemented to prevent malformed input from 
   being sent to the API.

## Optional Enhancements

1. Interactive prompts are not implemented but can be added using libraries 
   like inquirer.
2. Color-coded output or formatting can be added for better readability.
3. Authentication for accessing the API can be implemented if required.
4. Batch processing for handling multiple Todos at once can be added.
5. Support for additional features of the Todos API, such as pagination, 
   sorting, and filtering, can be added as per requirements.