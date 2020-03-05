let cookieImg = document.getElementById("cookie");

cookieImg.onclick = function () {
    let clicker = document.getElementById("clicker__counter");
    let score = Number(clicker.textContent);
    clicker.textContent = score+1;
    if(score%2 == 0){
        cookieImg.width = 300;  
    } else {
        cookieImg.width = 200;  
    };
};