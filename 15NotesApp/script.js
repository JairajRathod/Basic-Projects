
// this is a button which is used to add notes in notesListContainer
const addNotes = document.querySelector('.addNotes');

// this is a notesListContainer where all our notes are present
const notesListContainer = document.querySelector('.notesListContainer');

// here we add addEventListener on addNotes button to add a full note html tag
addNotes.addEventListener('click', () => {

    // here we create a div element which has a noteContainer Class
    let div = document.createElement('div');
    div.classList.add('noteContainer');

    // here we create a paragraph element which has a class noteItem and a attribute contentenditable which is true
    let p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.classList.add('noteItem');

    // this is a button which containes deleteButton class in it and innerHTML Delete
    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.classList.add('deleteButton');

    // here we wrape p tag in div as its first child
    div.appendChild(p);

    // here we wrape button tag in div as its second child
    div.appendChild(button);

    // here we appens div in notesListContainer
    notesListContainer.appendChild(div);
    saveNotesData();

})

notesListContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
        saveNotesData();
    }else if(event.target.tagName === 'P'){
        let notes = document.querySelectorAll('.noteItem');
        notes.forEach((note) => {
            note.onkeyup = function (){
                saveNotesData();
            }
        })
    }
})

function saveNotesData(){
    localStorage.setItem('keepNotesData', notesListContainer.innerHTML);
}

function showNotesData(){
    notesListContainer.innerHTML = localStorage.getItem('keepNotesData');
}

showNotesData();









