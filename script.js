const startingMinute = 15;
let time = startingMinute * 60;

const countDownP = document.querySelector("#countdown");

setInterval(countDownFunction, 1000)

function countDownFunction () { 
    const minute = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownP.innerHTML= ` ${minute} : ${ seconds} `

    time--;
}