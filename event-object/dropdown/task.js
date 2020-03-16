let button = document.querySelector("div.dropdown__value");
let dropList = document.querySelector("ul.dropdown__list");
let dropListDown = button.addEventListener("click", dropDown);

function dropDown(){
    let checkStatus = dropList.classList.contains("dropdown__list_active");
    if(checkStatus){
        dropList.classList.remove("dropdown__list_active");
    } else {
        dropList.classList.add("dropdown__list_active");
    };
};

let buttons = document.getElementsByClassName("dropdown__item");

for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", changeButtonName);
};

function changeButtonName(event){
    event.preventDefault();
    let clickedButtonText = event.currentTarget.textContent;
    button.textContent = `${clickedButtonText}`;
    dropList.classList.remove("dropdown__list_active");
};