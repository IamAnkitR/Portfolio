const text = document.querySelector(".text");

let count = 100;

setInterval(() => {
    setTimeout(()=>{
        text.textContent = "";
    },0);
    setTimeout(()=>{
        text.textContent = "I ";
    },200);
    setTimeout(()=>{
        text.textContent = "I build";
    },550);
    setTimeout(()=>{
        text.textContent = "I build things";
    },900);
    setTimeout(()=>{
        text.textContent = "I build things for";
    },1350);
    setTimeout(()=>{
        text.textContent = "I build things for the";
    },1700);
    setTimeout(()=>{
        text.textContent = "I build things for the web.";
    },2100);

    count-=1;
},2500);









