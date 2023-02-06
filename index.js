const text = document.querySelector(".text");

let count = 100;

setInterval(() => {
    setTimeout(()=>{
        text.textContent = "";
    },0);
    setTimeout(()=>{
        text.textContent = "I ";
    },700);
    setTimeout(()=>{
        text.textContent = "I build";
    },1150);
    setTimeout(()=>{
        text.textContent = "I build things";
    },1600);
    setTimeout(()=>{
        text.textContent = "I build things for";
    },1950);
    setTimeout(()=>{
        text.textContent = "I build things for the";
    },2400);
    setTimeout(()=>{
        text.textContent = "I build things for the web.";
    },2700);

    count-=1;
},4000);









