export function createNewProject(name = "untitled project", taskIds) {
  return {
    id: crypto.randomUUID(),
    name: name,
    tasksIds: taskIds || [],
  };
}

export function addTaskToProject(taskId, project) {
  if (!taskId || !project?.id) return project;
  if (project.tasks.includes(taskId)) return project;
  return {
    ...project,
    tasks: [...project.tasks, taskId],
  };
}

export function deleteTaskFromProject(taskId, project) {
  if (!project?.id) return project;
  if (!taskId) return project;
  if (!project.tasks.includes(taskId)) return project;
  return { ...project, tasks: project.tasks.filter((id) => id !== taskId) };
}

export function deleteProject(projects, projectId) {
  if (!Array.isArray(projects)) return [];
  if (!projectId) return projects;
  return projects.filter((project) => project.id !== projectId);
}

export function getProjectById(projects, projectId) {
  if (!Array.isArray(projects)) return null;
  return projects.find(p => p.id === projectId) || null;
}

export function renameProject(project, newName) {
  if (!project?.id) return project;
  return { ...project, name: newName || project.name };
}

//? add project but will possibly live in state.js
