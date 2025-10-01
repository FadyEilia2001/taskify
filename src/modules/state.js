import * as Projects from "./projects";
import * as Tasks from "./tasks";

export let myProjects = [];
export let myTasks = [];

//? do i need a default project to save tasks to?? export let defaultProject = Projects.createNewProject("general");

//toggle active project
export function setActiveProject(project) {
  if (!project?.id) return;
  myProjects.forEach((p) => {
    if (p.id !== project.id) {
      p.activeProject = false;
    } else {
      p.activeProject = true;
    }
  });
}

export function getActiveProject() {
  return myProjects.filter((p) => p.activeProject);
}

export function addProjectToProjects(project) {
  if (!project?.id || !project?.name) return;

  const normalizedName = project.name.trim().toLowerCase();
  const nameTaken = myProjects.some(
    (p) => p.id !== project.id && p.name.trim().toLowerCase() === normalizedName
  );
  if (nameTaken) {
    console.warn(
      `Project name "${project.name}" already exists. Skipping add/update.`
    );
    return;
  }
  const exists = myProjects.some((p) => p.id === project.id);
  if (exists) {
    myProjects = myProjects.map((p) =>
      p.id === project.id ? { ...p, ...project } : p
    );
    return;
  }
  if (!exists) {
    myProjects = [...myProjects, project];
  }
}

//Add Task to project
export function addTaskToProject(task, project) {
  if (!task.id || !project.id) return;
  if (project.tasksIds.includes(task.Id)) {
    console.warn("project exists");
    return project;
  }
  myProjects = myProjects.map((p) => {
    if (p.id !== project.id) {
      return p;
    } else if (p.id === project.id) {
      if (p.tasksIds.includes(task.id)) {
        console.warn(
          `task ${task.title} is included in project ${project.name}`
        );
        return p;
      }
      return { ...p, tasksIds: [...p.tasksIds, task.id] };
    }
  });
}

export function addTaskToTasks(task) {
  if (!task.id) return;
  if (myTasks.includes(task)) return;
  myTasks = [...myTasks, task];
}

//delete task from project
export function deleteTaskFromProject(taskId, projectId) {
  if (!taskId) return;
  if (!projectId) return;

  myProjects.forEach((p) => {
    if (p.id === projectId) {
      p.tasksIds = p.tasksIds.filter((t) => t !== taskId);
    }
  });
}

export function deleteTaskFromTasks(task) {
  // if a task is connected to a project i can't delete it!
  myProjects.forEach((project) => {
    if (project.tasksIds.includes(task.id)) {
      console.warn("can't delete task");
      return;
    } else {
      myTasks = myTasks.filter((t) => t.id !== task.id);
    }
  });
}
