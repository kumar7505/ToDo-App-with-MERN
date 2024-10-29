
# To Do List 

This to-do list app allows users to add, mark as complete, and delete tasks. It provides a simple interface to manage daily tasks efficiently, with real-time updates on task status.


## Installation

### Windows

  * [Download Node Js](https://nodejs.org/en)
  * [Download Git](https://git-scm.com/downloads/win)
  * [Download Mongo db](https://www.mongodb.com/)

### Cloning this repo

```
  > https://github.com/kumar7505/ToDo-App-with-MERN.git
  > cd ToDo-App-with-MERN
```

Install my-project with npm

```bash
  > npm i
```
    
  
## Server explanation

This to-do list app uses APIs to manage tasks by interacting with a backend server. The app sends HTTP requests to create, retrieve, update, and delete tasks in a MongoDB database, ensuring real-time synchronization between the client and server for task management.
## Environment variables

Create a .env file and set the environment variables

```bash
  PORT = LOCALHOST PORT NUMBER
  Mongo_PORT = YOUR MONGO DB LOCALHOST URL
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PORT` | `string` | **Required**. Your PORT number |
| `Mongo_PORT` | `string` | **Required**. Your mongo db localhost url |

## Executing the web

#### Executing the server

```bash
  > cd server
  > npm start
```

#### Executing the UI

```bash
  > cd ..
  > cd 'todo frontend'
  > npm run dev
```
