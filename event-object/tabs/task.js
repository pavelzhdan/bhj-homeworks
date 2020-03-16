let tabSwitchers = document.querySelectorAll("div.tab");
let tabContents = document.getElementsByClassName("tab__content");


for(let i=0; i<tabSwitchers.length; i++){
    tabSwitchers[i].addEventListener("click",switchTab);
};

function switchTab(event){
    //прячем старое название вкладки
    let oldTab = document.querySelector("div.tab_active");
    oldTab.classList.remove("tab_active");
    //прячем содержимое старой вкладки
    let oldTabContent = document.querySelector("div.tab__content_active");
    oldTabContent.classList.remove("tab__content_active");
    //ищем нужную вкладку и показываем ее
    let neededTab = event.target;
    neededTab.classList.add("tab_active");
    // ищем индекс
    let tabSwitchersArray = Array.from(tabSwitchers);
    let neededIndex = tabSwitchersArray.indexOf(event.target);
    //ищем нужное содержимое вкладки
    tabContents[neededIndex].classList.add("tab__content_active");
};