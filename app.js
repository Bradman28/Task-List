//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// call function to load all event listeners
loadEventListeners();

function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
}

// add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please add a task');
    }

    // create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    //Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';


    e.preventDefault();
}