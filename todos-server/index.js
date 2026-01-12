import express from "express";
import fs, { lchown, read, write } from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

const file = "./Todo.json";


const readTodos = () => {
  try {
    const data = fs.readFileSync(file, { encoding: "utf-8" });
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeTodos = (todos) => {
  fs.writeFileSync(file, JSON.stringify(todos, null, 2));
};

// 1 Get all todos
app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.send(todos);
});


// 2 Get todo by ID
app.get("/todos/id/:id", (req, res) => {
  const todos = readTodos();
  const todoID = req.params.id;
  const todo = todos.find((t) => t.id == todoID);
  if (!todo) {
    return res.status(404).send({ message: "todo not found" });
  }
  res.json(todo);
});

// 3 Create a new todo
app.post("/todos", (req, res) => {
  const todos = readTodos();
  const { task, priority } = req.body;
  const newID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  const newTodo = {
    id: newID,
    task,
    priority: priority || "low",
    completed: false,
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});


// 4 Update a todo by ID
app.put("/todos/id/:id", (req, res) => {
  const todos = readTodos();
  const todoID = req.params.id;
  const update = req.body;
  const Index = todos.findIndex((t) => t.id == todoID);
  if (Index === -1) {
    return res.status(404).send({ message: "todo not found" });
  }
  todos[Index] = { ...todos[Index], ...update };
  writeTodos(todos);
  res.json(todos[Index]);
});

// 5 Delete a todo by ID
app.delete("/todos/id/:id", (req, res) => {
    const todos = readTodos();
    const todoID = req.params.id;
    const Index = todos.findIndex((t) => t.id == todoID);
    if (Index === -1) {
      return res.status(404).send({ message: "todo not found" });
    }   
    const deletedTodo = todos.splice(Index, 1)[0];
    writeTodos(todos);
    res.json(deletedTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
