# FooCoding Express Homework

# Overview:

* Project Description: This project is a simple Todos API built using ( Express.js ) and ( Node.js ) file system module (fs). It allows users to perform CRUD (Create, Read, Update, Delete) operations on todos, which are stored in the file system.

## How to Run the Application:

1. Clone the Repository: Clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

  ( git clone <repository_url> )

2. Navigate to Project Directory: Navigate to the project directory in the terminal using the cd command:

( cd <project_directory> )

3. Install Dependencies: Install the required dependencies for the Todos API by running the following command:

   ( npm install )

4. Start the Application: Start the Todos API application by running the following command:

  ( npm start )

5. Accessing the API: Once the application is running, you can access the API endpoints using tools like Postman or curl. The base URL for the API will be http://localhost:3000.


## API Endpoints Documentation:

* Get All Todos:

   . URL: /todos
   . Method: GET
   . Response: Array of Todos
   . Status Codes:
       . 200 OK: Successful retrieval of todos.
       . 500 Internal Server Error: Server error.
       
* Get Todo by ID:

. URL: /todos/:id
. Method: GET
. Response: Todo object
. Status Codes:
    . 200 OK: Successful retrieval of the todo.
    . 404 Not Found: Todo with the specified ID not 
      found.
    . 500 Internal Server Error: Server error.

* Create Todo:
  
  . URL: /todos
  . Method: POST
  . Request Format: JSON object with title, 
    description, and optional completed fields.
  . Response: Success message
  . Status Codes:
     . 200 OK: Todo created successfully.
     . 400 Bad Request: Invalid request body.
     . 500 Internal Server Error: Server error.

* Update Todo by ID:

. URL: /todos/:id
. Method: PATCH
. Request Format: JSON object with fields to update 
  (title, description, completed).
. Response: Success message

. Status Codes:
   . 200 OK: Todo updated successfully.
   . 400 Bad Request: Invalid request body.
   . 404 Not Found: Todo with the specified ID not 
     found.
   . 500 Internal Server Error: Server error.

* Delete Todo by ID:

. URL: /todos/:id
. Method: DELETE
. Response: Success message
. Status Codes:
   . 200 OK: Todo deleted successfully.
   . 404 Not Found: Todo with the specified ID not 
      found.
   . 500 Internal Server Error: Server error.

### Additional Notes:

* Ensure that the data is stored in the 
   data/todo.json file.
* Use tools like Postman or curl to test the API 
  endpoints and verify their functionality.
