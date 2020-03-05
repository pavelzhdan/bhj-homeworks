function countDown() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if(timer.textContent == 0) {
        timer.textContent = "Вы победили в конкурсе!";
        clearTimeout(timerId);
    };
};

let timerId = setInterval(countDown, 1000);