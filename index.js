function getTime(){

let time=document.getElementById('clock-time')
const date=new Date()
//часы
let hour=date.getHours()
let hours=(hour<10)?'0'+hour:hour
//минуты
let minute=date.getMinutes()
let minutes=(minute<10)?'0'+minute:minute
//секунды
let second=date.getSeconds();
let seconds=(second<10)?'0'+second:second
//меняем в html
let html=`<span>${hours} : ${minutes} : ${seconds}</span>`;
time.innerHTML=html;
}
//повторяем каждую секунду
setInterval(getTime
,1000)