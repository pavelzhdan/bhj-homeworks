let spoiler = document.getElementById("modal_main");
spoiler.classList.add("modal_active");

let closeSpoiler = document.getElementsByClassName("modal__close");

for (var i=0; i < closeSpoiler.length; i++) {
    let checkStatus = closeSpoiler[i].classList.contains("show-success");
    closeSpoiler[i].onclick = function(){
        if(checkStatus){
        let showSuccess = document.getElementById("modal_success");
        showSuccess.classList.add("modal_active");
        } else {
            spoiler.classList.remove("modal_active");
        };
    };
};