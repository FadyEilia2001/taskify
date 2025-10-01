export function createNewProject(name = "untitled project", taskIds) {
  return {
    id: crypto.randomUUID(),
    name: name,
    tasksIds: taskIds || [],
    activeProject: false,
  };
}

//helper function to find project
export function getProjectById(projects, projectId) {
  if (!Array.isArray(projects)) return null;
  return projects.find((p) => p.id === projectId) || null;
}

export function getProjectTasks(projects, projectId) {
  const currentProject = getProjectById(projects, projectId);
  return currentProject ? currentProject.tasksIds : [];
}

//rename a project takes the project searches for it by ID, and adds new name
export function renameProject(project, newName) {
  if (!project?.id) return project;
  return { ...project, name: newName || project.name };
}





// delete project takes an array of project and the project ID that i want to delete
export function deleteProject(projects, projectId) {
  if (!Array.isArray(projects)) return [];
  if (!projectId) return projects;
  const currentProject = getProjectById(projects, projectId);
  if (currentProject.tasksIds.length > 0) {
    console.error("Must Reassign Project's Tasks First");
  }
  return projects.filter((project) => project.id !== projectId);
}
