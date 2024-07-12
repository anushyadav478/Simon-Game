let gameSequence=[];
let userSequence=[];
let btns=["red","yellow","green","violet"];
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});
let h2=document.querySelector("h2");
function flash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function levelup(){
        userSequence=[];
        level++;
        h2.innerText=`Level ${level}`;
        let idx=Math.floor(Math.random()*3);
        let randomcolor=btns[idx];
        gameSequence.push(randomcolor);
        console.log(gameSequence);
        let btn=document.querySelector(`.${randomcolor}`);
        flash(btn);
        
};
function checkans(idx){
    
    if(userSequence[idx]===gameSequence[idx]){
        if(userSequence.length===gameSequence.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over, YOUR SCORE IS <b>${level}</b> <br> 
        press any other key to restart again`;
        let body=document.querySelector("body");
        body.style.backgroundColor="Red";
        setTimeout(function(){
        body.style.backgroundColor="white";
        },300);
        restart();
    }
}

function btnpressed(){
let btn=this;
userSequence.push(this.id);
console.log(userSequence);
userflash(btn);
checkans(userSequence.length-1);
};

let Btns=document.querySelectorAll(".btn");
for(btn of Btns){
    btn.addEventListener("click",btnpressed);
}

function restart(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}






