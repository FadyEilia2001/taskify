import "./css/style.css";
import { createNewTask } from "./modules/tasks";

const app = document.querySelector("#app");

const newTask = createNewTask("my task", "this is my first task", new Date());
const newTask1 = createNewTask(
  "my task",
  "this is my first task",
  new Date(2025, 8, 29),
  "LOW"
);

const newTask2 = createNewTask("my task", "this is my first task");
const newTask3 = createNewTask("new task", "no desc", new Date(), "medium");
const newTask4 = createNewTask("new task", "no desc", new Date(), "high");
const newTask5 = createNewTask("new task", "no desc", new Date(), "high");
const newTask6 = createNewTask("new task", "no desc", new Date(), "low");
const newTask7 = createNewTask("new task", "no desc", new Date(), "medium");
const newTask8 = createNewTask("new task", "no desc", new Date(), "high");
const newTask9 = createNewTask("new task", "no desc", new Date(), "medium");

const newArr = [];
newArr.push(
  newTask,
  newTask1,
  newTask2,
  newTask3,
  newTask4,
  newTask5,
  newTask6,
  newTask7,
  newTask9,
  newTask8
);
