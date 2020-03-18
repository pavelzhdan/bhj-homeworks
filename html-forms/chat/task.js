let chatButton = document.querySelector("div.chat-widget");

chatButton.addEventListener("click", () => {
    chatButton.classList.add("chat-widget_active");
});

const messages = document.querySelector('.chat-widget__messages');

let inputArea = document.querySelector("input.chat-widget__input");
let inputText;
let inputTarget;
let botAnswers = ["Иди куда шел!", "Шутка, мы не онлайн", "Извините, у меня острый приступ пофигизма", "Не мешайте мне общаться с коллегами!", "Ой всё"];

inputArea.addEventListener("input", (event)=> {
    inputTarget = event.target;
    inputText = event.target.value;
});

document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if((keyName === "Enter") && (inputText)){
        let time = new Date();
        let hours =time.getHours();
        let minutes = time.getMinutes()
        if(hours<10){
            hours = `0${hours}`;
        };
        if(minutes<10){
            minutes = `0${minutes}`;
        };
        let currentTime = `${hours}:${minutes}`;
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                    ${inputText}
                </div>
            </div>
            `;
        inputTarget.value = " ";
        
        setTimeout(autoAnswer, 10000);

        function autoAnswer (){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        
        let botGeneratedAnswer = getRandomInt(botAnswers.length-1);
        console.log(botGeneratedAnswer);
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                    ${botAnswers[botGeneratedAnswer]}
                </div>
            </div>
            `;   
        };

    };
});