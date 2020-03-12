let mainMenu = document.getElementsByClassName("menu__link");

for(let i=0; i<mainMenu.length; i++){
    mainMenu[i].onclick = function(){
        let chosenMenu = mainMenu[i];
        let chosenParent = chosenMenu.closest("li");
        let subMenu = chosenParent.querySelector("ul");
        if (subMenu){
            subMenu.classList.add("menu_active")
            return false
        };
    };
};