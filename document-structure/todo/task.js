let inputArea = document.getElementById("task__input");
let inputButton = document.getElementById("tasks__add");
let deleteToDoItems = new Array();
let textContainer;
let lastToDo;

inputButton.addEventListener("click", (event)=>{
    event.preventDefault();
    addToDoItem(textContainer);
});

inputArea.addEventListener("input", (event)=> {
    textContainer = event.target;
});

let list = document.getElementById("tasks__list");

document.addEventListener('keyup', (event) => {
    let keyName = event.key;
    if(keyName === "Enter"){
        addToDoItem(textContainer);
    };
});

function addToDoItem(text){
    console.log(text);
    console.log(text.value);
    console.log(typeof text.value);
    console.log(text.value == 0);
    if (!text.value == 0){
    list.insertAdjacentHTML("beforeend" , 
    `<div class="task">
          <div class="task__title">
            ${text.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`
    );
    textContainer.value = "";
    };
    lastToDo = document.querySelector("div.task:last-child>a.task__remove");
    lastToDo.addEventListener("click", (event)=>{
        event.target.closest("div.task").remove();
    });
};