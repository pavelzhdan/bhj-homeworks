let targetElements = document.querySelectorAll("a.font-size");
let targetElementsArray = Array.from(targetElements);

for (const targetElement of targetElements){
    targetElement.addEventListener("click",changeFontSize);
};

function changeFontSize(event){
    event.preventDefault();
    let previousObject = document.querySelector("a.font-size_active");
    previousObject.classList.remove("font-size_active");
    let chosenObject = event.target;
    chosenObject.classList.add("font-size_active");
    let chosenObjectIndex = targetElementsArray.indexOf(chosenObject);
    let modifiedText = document.querySelector("div.book");
    switch(chosenObjectIndex){
        case 0:
            modifiedText.classList.add("book_fs-small");
            modifiedText.classList.remove("book_fs-big");
            break;
        case 1:
            modifiedText.classList.remove("book_fs-big");
            modifiedText.classList.remove("book_fs-small");
            break;
        default:
            modifiedText.classList.add("book_fs-big");
            modifiedText.classList.remove("book_fs-small");
    };
};