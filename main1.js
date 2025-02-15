const hourElement=document.getElementById("hour");
const minuteElement=document.getElementById("minutes");
const secondElement=document.getElementById("seconds");
const ampmEl=document.getElementById('ampm');

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";

    if(h>12){
        h=h-12;
        ampm="AM";
    }

    h=h<10 ? "0" +h:h;
    m=m<10 ? "0" +m:m;
    s=s<10 ? "0" +s:s;

    hourElement.innerText=h;
    minuteElement.innerText=m;
    secondElement.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{
        updateClock()
    },1000);

}
updateClock();
