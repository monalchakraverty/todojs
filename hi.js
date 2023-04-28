const tasksContainer = document.getElementById('tasks-container');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');

function createTaskElement(taskText) {
  const task = document.createElement('div');
  const checkbox = document.createElement('input');
  const taskTextElement = document.createElement('span');
  const deleteButton = document.createElement('button');

  task.classList.add('task');
  checkbox.type = 'checkbox';
  taskTextElement.innerText = taskText;
  deleteButton.innerText = 'Delete';


  deleteButton.addEventListener('click', function() {
    task.remove();
  });

 
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      task.classList.add('finished');
    } else {
      task.classList.remove('finished');
    }
  });

  task.appendChild(checkbox);
  task.appendChild(taskTextElement);
  task.appendChild(deleteButton);

  return task;
}


addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText.length > 0) {
    const taskElement = createTaskElement(taskText);
    tasksContainer.appendChild(taskElement);
    taskInput.value = '';
  }
});

tasksContainer.addEventListener('DOMNodeInserted', function(event) {
  const taskElement = event.target;

  if (taskElement.classList.contains('task')) {
    taskElement.animate([
      { transform: 'translateX(-50px)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 }
    ], {
      duration: 500,
      easing: 'ease-out'
    });
  }
});
