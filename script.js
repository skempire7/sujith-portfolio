$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 20){
      $('.scroll-up-btn').addClass("show");
  }
  else{
      $('.scroll-up-btn').removeClass("show");
  }
  });  


  //typing animation script
  var typed = new Typed(".typing", {
    strings: ["Engineer", "Developer", "Explorer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });


  var typed = new Typed(".typing-2", {
    strings: ["Engineer", "Developer", "Explorer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // slide up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  }) ;
});