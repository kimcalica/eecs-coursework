$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1) {
	    $(".navbar").css("background" , "#1B1313");
	  }

	  else{
		  $(".navbar").css("background" , "#f4511e");
	  }
  })
})
