let spoiler = document.getElementById("modal_main");
spoiler.classList.add("modal_active");

let closeSpoiler = document.getElementsByClassName("modal__close");

for (var i=0; i < closeSpoiler.length; i++) {
    let checkStatus = closeSpoiler[i].classList.contains("show-success");
    let showSuccess = document.getElementById("modal_success");
    closeSpoiler[i].onclick = function(){
        if(checkStatus){
        showSuccess.classList.add("modal_active");
        spoiler.classList.remove("modal_active");
// если это кнопка "Сделать хорошо", то поменяет на "Хорошо сделано"
            } else {
// если нет, то удаляет везде "modal_active"
        spoiler.classList.remove("modal_active");
        showSuccess.classList.remove("modal_active");
        };
    };
};
