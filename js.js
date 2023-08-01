// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="markAsDone(this)">Done</button>
    <button onclick="removeTask(this)">Remove</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

// Function to mark a task as done
function markAsDone(button) {
  const taskItem = button.parentElement;
  taskItem.classList.toggle('done');
}

// Function to remove a task
function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
