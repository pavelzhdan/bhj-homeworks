let needTipElements = document.getElementsByClassName("has-tooltip");
 
for (const needTipElement of needTipElements){
    needTipElement.insertAdjacentHTML("beforeend" , `<div class="tooltip">${needTipElement.title}</div>`);
    needTipElement.addEventListener("click", (event) =>{
        event.preventDefault();
        let coordinates = needTipElement.getBoundingClientRect().left
        let tip = needTipElement.querySelector("a > div");
        tip.style.left = `${coordinates}px`;
        if ((tip.style.display == "none") || (tip.style.display == "")){
            tip.style.display = "block";
        } else {
            tip.style.display = "none";
        };
    });
};


