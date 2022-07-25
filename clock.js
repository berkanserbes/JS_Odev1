let userName = prompt("Isminizi giriniz: ");

if(userName)
    document.getElementById('myName').innerText = userName;

let currentTime = new Date().toDateString();
document.querySelector("#time").innerText = currentTime;    