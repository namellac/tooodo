if (!props.taskContent.trim()) {
  alert("Task content cannot be empty");
  return;
}

if (!props.dueDate) {
  alert("Please specify a due date");
  return;
}