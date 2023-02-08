const text = document.querySelector(".text");

setInterval(() => {
    setTimeout(()=>{
        text.textContent = "";
    },0);
    setTimeout(()=>{
        text.textContent = "I ";
    },300);
    setTimeout(()=>{
        text.textContent = "I build";
    },600);
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

},3000);

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    var width = window.innerWidth
    if(width<700){
    mainMenu.style.top = '-120%';
    }
}










