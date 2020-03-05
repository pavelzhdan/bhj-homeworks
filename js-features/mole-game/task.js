let target = document.getElementById('hole1');


target.onclick = () => {
    checkscore(target);
};

let target1 = document.getElementById('hole2');


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
        }
    }else{
        miss.textContent = missScore +1;
        if(miss.textContent == 5){
            alert("Вы проиграли!");
            strike.textContent = 0;
            miss.textContent = 0; 
        };
    };
};


target1.onclick = () => {
    checkscore(target1);
};

let target2 = document.getElementById('hole3');

target2.onclick = () => {
    checkscore(target2);
};

let target3 = document.getElementById('hole4');

target3.onclick = () => {
    checkscore(target3);
};

let target4 = document.getElementById('hole5');

target4.onclick = () => {
    checkscore(target4);
};


let target5 = document.getElementById('hole6');

target5.onclick = () => {
    checkscore(target5);
};

let target6 = document.getElementById('hole7');

target6.onclick = () => {
    checkscore(target6);
};

let target7 = document.getElementById('hole8');

target7.onclick = () => {
    checkscore(target7);
};

let target8 = document.getElementById('hole9');

target8.onclick = () => {
    checkscore(target8);
};