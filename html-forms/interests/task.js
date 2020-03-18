let checkingElements = document.querySelectorAll("div > ul > li > label");

for(const checkingElement of checkingElements){
    checkingElement.addEventListener("click", () =>{
        let checkedBox = event.target;
        let parent = checkedBox.closest("li");
        let subBoxesElements = parent.querySelectorAll("ul.interests_active input.interest__check");
        if(checkedBox.checked){
            for(const subBoxesElement of subBoxesElements){
                console.log(subBoxesElement);
                subBoxesElement.checked = true;
            };
        } else {
            for(const subBoxesElement of subBoxesElements){
                subBoxesElement.checked = false;
            };
        };
    });
};