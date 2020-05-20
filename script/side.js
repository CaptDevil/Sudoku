let timer = document.getElementById('timer');
let sec = parseInt(timer.textContent);

let timeStamp = document.getElementById('time-stamp');

let today = new Date();

let hours = today.getHours();

if(hours>=0 && hours<4)
    timeStamp.innerHTML = `4:00 AM IST ${today.getDate()}-${(today.getMonth()+1)}-${today.getFullYear()}`;
else if(hours>=4 && hours<8)
    timeStamp.innerHTML = `8:00 AM IST ${today.getDate()}-${(today.getMonth()+1)}-${today.getFullYear()}`;
else if(hours>=8 && hours<12)
    timeStamp.innerHTML = `12:00 PM IST ${today.getDate()}-${(today.getMonth()+1)}-${today.getFullYear()}`;
else if(hours>=12 && hours<16)
    timeStamp.innerHTML = `4:00 PM IST ${today.getDate()}-${(today.getMonth()+1)}-${today.getFullYear()}`;
else if(hours>=16 && hours<20)
    timeStamp.innerHTML = `8:00 PM IST ${today.getDate()+1}-${(today.getMonth()+1)}-${today.getFullYear()}`;
else if(hours>=20 && hours<24)
    timeStamp.innerHTML = `00:00 AM IST ${(today.getDate()+1)}-${(today.getMonth()+1)}-${today.getFullYear()}`;

let countdown = setInterval(() => {
    if(sec <= 0)
        location.href = "index.html";
    timer.innerHTML = `${sec}`;
    sec--;
}, 1000);