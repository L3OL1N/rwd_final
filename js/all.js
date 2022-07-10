$(document).ready(function () {
  //hamburger menu
  $(".hamburger").click(function (event) { 
    event.preventDefault();
    $(this).siblings("ul").toggleClass("show");
  });

  //top
  $('.toTop-arrow').click(function (event) { 
    event.preventDefault();
    $('html,body').animate({scrollTop:0}, 750);
  });

  // input span active
  $("input").click(function (event) { 
    event.preventDefault();
    $(this).siblings("span").addClass("active");
  });
  $("input").blur(function (event) { 
    event.preventDefault();
    $(this).siblings("span").removeClass("active");
  });

  //shop show
  $(".photo>a").click(function (event) { 
    event.preventDefault();
    var hrefpos = $(this).attr("href");
    $("html,body").animate({
      scrollTop:$("#nav").offset().top
    },800);
    $("."+hrefpos).css("display","grid");
    $("."+hrefpos).siblings(".right_item").hide();
    $(".sidebar").find("a[href="+hrefpos+"]").addClass("select");
    $("a[href="+hrefpos+"]").siblings("a").removeClass("select");
    $(this).parent().siblings(".shop").addClass("active");
  });

  //sidebar select & right_item show 
  $(".sidebar>a").click(function (event) { 
    event.preventDefault();

    //select
    $(this).addClass("select");
    $(this).siblings().removeClass("select");

    //show
    var hrefDish = $(this).attr("href");
    $("."+hrefDish).css("display","grid");
    $("."+hrefDish).siblings(".right_item").hide();
  });

  //cart button
  $(".right_item>li>button").click(function (event) { 
    $(this).toggleClass("active");
  });

  //time scroll
  $(window).scroll(function(){
    $(".animate").each(function(){
      var thispos = $(this).offset().top;
      var windowheight = $(window).height();
      var scrollpos = $(window).scrollTop();
      (windowheight + scrollpos) >= (thispos+100)? $(this).addClass("fadeIn"):$(this).removeClass("fadeIn");
      
    });
  });
});