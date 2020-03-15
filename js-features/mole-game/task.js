let target0 = document.getElementsByClassName("hole");

for(let i = 0; i < target0.length; i++){
    target0[i].onclick = () => {
        let target = target0[i];
        checkscore(target);
    };
};

function checkscore(hole){
    let strike = document.getElementById("dead");
    let strikeScore = Number(strike.textContent);
    let miss = document.getElementById("lost");
    let missScore = Number(miss.textContent);
    if(hole.classList.contains("hole_has-mole")){
        strike.textContent = strikeScore + 1;
        if(strike.textContent == 10){
            alert("Вы Выиграли!");
            strike.textContent = 0;
            miss.textContent = 0;
        };
    }else{
        miss.textContent = missScore +1;
        if(miss.textContent == 5){
            alert("Вы проиграли!");
            strike.textContent = 0;
            miss.textContent = 0; 
        };
    };
};