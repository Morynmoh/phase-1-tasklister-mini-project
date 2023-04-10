document.addEventListener("DOMContentLoaded", () => {
   // your code here
   const createTaskForm = document.querySelector('#create-task-form');
   // Add an event listener to the form that listens for a submit event
   const tasksList = document.querySelector('#tasks');
   createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

      // Get the value of the task input
  const taskInput = document.querySelector('#new-task-description');
  const taskDescription = taskInput.value;


  // Create a new list item element with the task description
  const newTask = document.createElement('li');
  newTask.textContent = taskDescription;

  // Create a new button element with the text "Delete"
  const deleteButton = document.createElement('button');
  deleteButton.textContent = ' X';

  // Add an event listener to the delete button that removes the task from the list
  deleteButton.addEventListener('click', () => {
    tasksList.removeChild(newTask);
  });

  // Append the delete button to the new task
  newTask.appendChild(deleteButton);

  // Append the new task to the tasks list
  tasksList.appendChild(newTask);

  // Reset the task input field
  taskInput.value = '';
});
})
