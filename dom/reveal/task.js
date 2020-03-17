let popupElements = document.querySelectorAll("div.reveal");

window.addEventListener("scroll", revealObject)

function revealObject(){
    let windowHeight = window.innerHeight;
    for (const popupElement of popupElements){
        let coordinates = popupElement.getBoundingClientRect().top
        if(coordinates>0 && coordinates<windowHeight){
            popupElement.classList.add("reveal_active");
        };
    };
};