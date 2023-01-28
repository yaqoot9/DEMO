$(document).ready(function(){

    $('.carousel_01').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
   

    $('.carousel_02').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

  });

 

let countdowndate=new Date('Nov 30 , 2022 16:00:00').getTime();

let countdown=setInterval(function(){
let now=new Date().getTime();
let distance=countdowndate-now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById('days').innerHTML=days;
document.getElementById('hourse').innerHTML=hours;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;

 if(distance=0){
 clearInterval(countdown);
 document.getElementById('timer').innerHTML='Expaired'
 }

}, 1000);



let registerpage=document.getElementById("register-page");
let register=document.getElementById('reg');
let overlay=document.getElementById("overlay");
register.addEventListener('click',function(){
registerpage.style.display='block';
    
});

overlay.addEventListener('click',function(){

registerpage.style.display='none'

});




let loginpage=document.getElementById("Login-page");
let login=document.getElementById('log');
let overlaylog=document.getElementById("overlaylog");
login.addEventListener('click',function(){
    loginpage.style.display='block';
    
});

overlaylog.addEventListener('click',function(){

loginpage.style.display='none'

});