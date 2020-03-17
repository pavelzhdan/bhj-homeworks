let rotatorElements = document.querySelectorAll("span.rotator__case");
let rotatorElementsArray = Array.from(rotatorElements);

function rotateTheWorld(){
    let activeElement = document.querySelector("span.rotator__case_active");
    let activeElementIndex = rotatorElementsArray.indexOf(activeElement);
    activeElement.classList.remove("rotator__case_active");
    let nextActiveElement = activeElementIndex+1;
    if(nextActiveElement == rotatorElements.length){
        nextActiveElement = 0;
    };
    rotatorElements[nextActiveElement].classList.add("rotator__case_active");
};

setInterval(rotateTheWorld, 1000);