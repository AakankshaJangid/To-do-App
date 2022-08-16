//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = ""
}

function deleteCheck(e){
    /*The target event property returns the element that triggered the event.

    The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.  */
    const item = e.target;
    //delete todo
    /** The classList property returns the CSS classnames of an element. */
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall')
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }         
        }
    });
}