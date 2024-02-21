const addItems = document.getElementById('add-items');
const addBtn = document.getElementById('add');
const itemList = document.querySelector('.item-list');

function addItem() {
    const newItemText = addItems.value;
    if (newItemText.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `<h3><span>${newItemText}</span></h3> <button class="edit-btn"><img src="img/pencil.png" alt=""></button> <button class="delete-btn"><img src="img/delete.png" alt=""></button>`;
        itemList.appendChild(newItem);
        addItems.value = '';
        attachItemEvents(newItem);
    }
}

addBtn.addEventListener('click', addItem);

function editItem(item) {
    const spanElement = item.querySelector('span');
    const newText = prompt('Enter new text for the item:', spanElement.innerText);
    if (newText !== null) {
        spanElement.innerText = newText;
    }
}

function deleteItem(item) {
    item.remove();
}

function attachItemEvents(item) {
    const editBtn = item.querySelector('.edit-btn');
    const deleteBtn = item.querySelector('.delete-btn');
    const itemText = item.querySelector('span');

    editBtn.addEventListener('click', () => editItem(item));
    deleteBtn.addEventListener('click', () => deleteItem(item));
}


document.querySelectorAll('.items').forEach(item => attachItemEvents(item));
