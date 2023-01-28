let mediaQuery=window.matchMedia('(max-width:767px)');
if(mediaQuery.matches){
    let newHead=document.getElementById('myCarousel');
    newHead.outerHTML=`
    <div class="w-100">
    <img   class="w-100" src="assets/images/slide1.jpg">

     <div class="container d-flex  align-items-center">
       <div class="carousel-caption  h-100 text-start">
         <h1>The best theam for <p class="main-head">education</p></h1>
         
         <p><a class="btn main-btn" href="#">Buy now</a></p>
       </div>
     </div>
   </div>
    
    `
}