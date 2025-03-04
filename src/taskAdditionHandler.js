// Assuming props has access to taskContent, selectedColumn, and dueDate

const handleAddNewTask = async () => {
  const newTask = {
    content: props.taskContent,
    status: props.selectedColumn, // 'td', 'ip', or 'de'
    dueDate: props.dueDate,
  };

  try {
    const response = await fetch('/api/tasks/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Task added successfully
      props.handleToggleModal(); // Close modal upon success
    } else {
      console.error('Failed to add task');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};