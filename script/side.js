let timer = document.getElementById('timer');
let sec = parseInt(timer.textContent);

let countdown = setInterval(() => {
    if(sec <= 0)
        location.href = "index.html";
    timer.innerHTML = `${sec}`;
    sec--;
}, 1000);