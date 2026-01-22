document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('todo-input').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'todo-item';
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(deleteBtn);

    document.getElementById('todo-list').appendChild(taskItem);

    document.getElementById('todo-input').value = ''; // Clear input field
}
