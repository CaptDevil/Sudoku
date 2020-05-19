let timer = document.getElementById('timer');
let sec = parseInt(timer.textContent);

let timeStamp = document.getElementById('time-stamp');

let today = new Date();

let hours = today.getHours();

if(hours>=0 && hours<6)
    timeStamp.innerHTML = `6:00 AM IST ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
else if(hours>=6 && hours<12)
    timeStamp.innerHTML = `12:00 PM IST ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
else if(hours>=12 && hours<18)
    timeStamp.innerHTML = `6:00 PM IST ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
else if(hours>=18 && hours<24)
    timeStamp.innerHTML = `00:00 AM IST ${(today.getDate()+1)}-${today.getMonth()}-${today.getFullYear()}`;

let countdown = setInterval(() => {
    if(sec <= 0)
        location.href = "index.html";
    timer.innerHTML = `${sec}`;
    sec--;
}, 1000);