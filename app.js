let sc = document.getElementById("sc");
let mn = document.getElementById("mn");
let hr = document.getElementById("hr");

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

//digital clock
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hour = document.getElementById('hour');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h>=12?"pm":"am";

    // convert 24hour clock to 12hour clock
    if(h>12){
        h=h-12;
    }


    //add a zero before a single digit number
    h=(h<10) ? "0" +h:h;
    m=(m<10) ? "0" +m:m;
    s=(s<10) ? "0" +s:s

    hour.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;

});



