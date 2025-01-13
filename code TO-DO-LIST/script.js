
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

  taskList.appendChild(li);

  taskInput.value = '';
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

