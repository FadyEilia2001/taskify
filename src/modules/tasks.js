export function createNewTask(
  title = "untitled task",
  desc = "no desc",
  dueDate = new Date(),
  priority = "low",
  complete = false
) {
  return {
    id: crypto.randomUUID(),
    title: title,
    desc: desc,
    dueDate: dueDate,
    priority: priority,
    complete: complete,
  };
}

// helper function to get a task - takes an array and a taskID
export function getTaskById(tasks, taskId) {
  if (!Array.isArray(tasks)) return null;
  return tasks.find((t) => t.id === taskId) || null;
}

//toggle task complete or not complete
export function toggleTaskComplete(task) {
  return { ...task, complete: !task.complete };
}

//update a dynamic task field
export function updateTask(task, fieldToUpdate, value) {
  const allowedFields = ["title", "desc", "dueDate", "priority", "complete"];
  if (!allowedFields.includes(fieldToUpdate)) return task;
  return { ...task, [fieldToUpdate]: value };
}

//Filter tasks due today
export function filterTasksByDate(tasksToSort) {
  if (!Array.isArray(tasksToSort)) return [];
  const todayDate = new Date();
  return tasksToSort
    .filter((task) => task.complete === false)
    .filter((task) => task.dueDate.toDateString() === todayDate.toDateString());
}

//Filter tasks by priority
export function filterTasksByPriority(tasksToSort, priority) {
  if (!Array.isArray(tasksToSort)) return [];
  return tasksToSort
    .filter((task) => task.complete === false)
    .filter((task) => task.priority === priority.toLowerCase());
}

//Sort tasks by date
export function sortTasksByDate(tasksToSort) {
  if (!Array.isArray(tasksToSort)) return [];
  return [...tasksToSort]
    .filter((task) => task.complete === false)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

export function sortTasksByPriority(tasksToSort, order = "asc") {
  if (!Array.isArray(tasksToSort)) return [];
  const priorityRank = { low: 1, medium: 2, high: 3 };
  return [...tasksToSort].sort((a, b) => {
    const rankA = priorityRank[a.priority?.toLowerCase()] || 0;
    const rankB = priorityRank[b.priority?.toLowerCase()] || 0;
    return order === "asc" ? rankA - rankB : rankB - rankA;
  });
}

// export function deleteTask(tasks, taskId) {
//   if (!Array.isArray(tasks)) return [];
//   if (!taskId) return tasks;
//   return tasks.filter((task) => task.id !== taskId);
// }
