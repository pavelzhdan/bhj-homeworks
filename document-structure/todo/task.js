let inputArea = document.getElementById("task__input");
let inputText;
let deleteToDoItems;
let textContainer;

inputArea.addEventListener("input", (event)=> {
    inputText = event.target.value;
    textContainer = event.target;
});

let list = document.getElementById("tasks__list");

document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if((keyName === "Enter")){
        list.insertAdjacentHTML("beforeend" , 
        `<div class="task">
              <div class="task__title">
                ${inputText}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>`
        );
    deleteToDoItems = document.querySelectorAll("a.task__remove");
    event.preventDefault();
        for(const deleteToDoItem of deleteToDoItems){
            deleteToDoItem.addEventListener("click", ()=>{
                let parent = deleteToDoItem.closest(".task");
                parent.remove();
            });
        };
    textContainer.value = "";
    };     
});

