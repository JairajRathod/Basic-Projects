const addButton = document.querySelector('.addButton');
const inputField = document.querySelector('.inputField');
const listContainer = document.querySelector('.listContainer');

addButton.addEventListener('click', () => {
    if(inputField.value == ''){
        alert('Please into some text.')
    }else{
        todo = document.createElement('div');
        todo.classList.add('todoItem');

        let text = document.createElement('p');
        text.classList.add('todoText');
        text.innerText = inputField.value;

        let deleteTodo = document.createElement('span');
        deleteTodo.classList.add('deleteItem');
        deleteTodo.innerHTML = '&#10006';

        todo.appendChild(text);
        todo.appendChild(deleteTodo);

    }

    listContainer.appendChild(todo);
    inputField.value = '';
    saveData();

})


listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'P'){
        event.target.classList.toggle('todoTextCheck')
        saveData();
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();



