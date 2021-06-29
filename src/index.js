const newForm = () => document.getElementById("create-task-form");
const descriptionInput = () => document.getElementById("new-task-description");
const priorityInput = () => document.getElementById("prioritySelector");
const submitButton = () => document.getElementById("submitButton");
const tasksList = () => document.getElementById("tasksList");

const tasks = [
  // {description: "Description 1", priority: "Priority 1"},
  // {description: "Description 2", priority: "Priority 2"}
];

const attachSubmitForm = (event) => {
  newForm().addEventListener('submit', submitForm)
}

const createTask = () => {
  tasks.forEach(task => displayTask(task))
}

const submitForm = (event) => {
  event.preventDefault();
  
  let task = {
    description: descriptionInput().value,
    priority: priorityInput().value
  }
  tasks.push(task);
  displayTask(task);
}


const displayTask = (task) => {
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');

  h3.innerText = `${task.description}`
  h4.innerText = `${task.priority}`;


  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(deleteButton);

  tasksList().appendChild(div);
} 

document.addEventListener('DOMContentLoaded' , event => {
  attachSubmitForm();
  createTask();
})