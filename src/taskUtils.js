export function validateTask(task) {
  if (!task.title || task.title.trim() === '') {
    return false;
  }

  return ['To Do', 'In Progress', 'Done'].includes(task.status);
}

export function countTasksByStatus(tasks, status) {
  return tasks.filter((task) => task.status === status).length;
}