document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="button-group">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add edit button functionality
    taskItem.querySelector('.edit-btn').addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText && newTaskText.trim() !== '') {
            taskItem.querySelector('span').textContent = newTaskText;
        }
    });

    // Add delete button functionality
    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        const confirmation = confirm('Are you sure you want to delete this task?');
        if (confirmation) {
            taskItem.remove();
        }
    });

    // Append the task to the list
    document.getElementById('todo-list').appendChild(taskItem);

    // Clear input after adding task
    input.value = '';
}
