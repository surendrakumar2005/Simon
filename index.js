var lis=['green','red','yellow','blue'];
var user=[];
level=0;
var com=[];


$('body').keydown(function(){
    if (level==0){
        newgame();
        
    }
});

$(".btn").click(function(){ 
    
    user.push(this.id);

new Audio("./sounds/"+this.id+'.mp3').play();
press(this);
if(level===0){
    newgame();
}
else{
check();
}
}
);
$('.bot').click(function(){
    $('.dis').toggle();
});

function check(){

    if(user[user.length-1]===com[user.length-1]){
      if(user.length===com.length){  
setTimeout(function(){
newgame();},1000);
}}
else{
   new Audio("./sounds/wrong.mp3").play();
   $('body').addClass("game-over");
   $('h1').text('GameOver, press any key to Restart');
   setTimeout(function(){
    $('body').removeClass('game-over');
},200); 
level=0
com=[] 
}
}








function press(a){
    a.classList.add('pressed');
    setTimeout(function(){
        a.classList.remove('pressed');
    },100);
}


function newgame(){
    user=[];
    level++;
$('h1').text('Level '+level);    
    var ind=Math.floor(Math.random()*3)+1;
com.push(lis[ind]);
    
$('#'+lis[ind]).addClass('pressed');
    new Audio("./sounds/"+lis[ind]+'.mp3').play();
setTimeout(function(){
    $('#'+lis[ind]).removeClass('pressed');
},100);


    
   
}



