  $(document).ready(function() {
 
	  $("#dungLuong32").click(function(event) {
	  	$("#dungLuong32").addClass('btn64');
	  	$("#dungLuong64").attr('class', 'btn');
	  });
	  $("#dungLuong64").click(function(event) {
	  	$("#dungLuong32").attr('class', 'btn');
	  	$("#dungLuong64").addClass('btn64');
	  });

	  $(".1sao").hover(
	  	function(event) {
	  		this.setAttribute("src", "./assets/icons/rate-fill.png");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				this.setAttribute("src", "./assets/icons/rate.png");
			}
	  	}
	  );

	  $(".1sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$("#starNum").toggleClass("daChon");
	  	this.setAttribute("src", "./assets/icons/rate-fill.png");
	  });

	  $(".2sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");
			}
	  	}
	  );

	  $(".2sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
		$("#starNum").toggleClass("daChon");
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  });

	  $(".3sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");	
	  			$(".3sao").attr("src", "./assets/icons/rate.png");	
			}
	  	}
	  );

	  $(".3sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$("#starNum").toggleClass("daChon");
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");		
	  });

	  $(".4sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".4sao").attr("src", "./assets/icons/rate-fill.png");	
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");	
	  			$(".3sao").attr("src", "./assets/icons/rate.png");
	  			$(".4sao").attr("src", "./assets/icons/rate.png");	
			}
	  	}
	  );

	  $(".4sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$(".3sao").toggleClass('daChon');
	  	$("#starNum").toggleClass("daChon");
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".4sao").attr("src", "./assets/icons/rate-fill.png");	
	  });

	  $(".5sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".4sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".5sao").attr("src", "./assets/icons/rate-fill.png");	
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");	
	  			$(".3sao").attr("src", "./assets/icons/rate.png");	
	  			$(".4sao").attr("src", "./assets/icons/rate.png");
	  			$(".5sao").attr("src", "./assets/icons/rate.png");
			}
	  	}
	  );

	  $(".5sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$(".3sao").toggleClass('daChon');
	  	$(".4sao").toggleClass('daChon');
	  	$("#starNum").toggleClass("daChon");
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".4sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".5sao").attr("src", "./assets/icons/rate-fill.png");	
	  });
	 
	 $(".do").click(function(event) {
	 	$(".do").attr('stroke-width', '3');
	 	$(".den").attr('stroke-width', '0');
	 	$(".hinhDienThoai").attr('src', './assets/img/products/htc-u-ultra-colors/htc-u-ultra-red.png');
	 });

	 $(".den").click(function(event) {
	 	$(".den").attr('stroke-width', '3');
	 	$(".do").attr('stroke-width', '0');
	 	$(".hinhDienThoai").attr('src', './assets/img/products/htc-u-ultra-colors/htc-u-ultra-black.png');
	 });

	 $("#divXemThemDetail").click(function(event) {
	 	$("#divXemThemDetail").hide();
	 	$("#listenUHide").slideDown('slow');
	 	$("#divThuGonDetail").show();
	 });

	 $("#divThuGonDetail").click(function(event) {
	 	$("#divThuGonDetail").hide();
	 	$("#listenUHide").slideUp('slow');
	 	$("#divXemThemDetail").show();
	 });

	 $("#divXemThemSpecs").click(function(event) {
	 	$("#divXemThemSpecs").hide();
	 	$("#specsHide").slideDown('slow');
	 	$("#divThuGonSpecs").show();
	 });

	 $("#divThuGonSpecs").click(function(event) {
	 	$("#divThuGonSpecs").hide();
	 	$("#specsHide").slideUp('slow');
	 	$("#divXemThemSpecs").show();
	 });

	 $('#divThemDetail').hide();
	 $('.navbarMoTaFixed').hide();

});

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > 515) {
    	$('#divThemDetail').show();
  	 } else {
    	$('#divThemDetail').hide();
  	}
}
)

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > 50) {
    	$('.navbarMoTaFixed').show();
    	$('.navbarMoTa').hide();
  	 } else {
    	$('.navbarMoTaFixed').hide();
    	$('.navbarMoTa').show();
  	}
}
)

var offsetDetails = $("#details").offset().top - 101;
var offsetDetailsB = $("#detailsEnd").offset().top - 101;
var offsetSpecs = $("#specs").offset().top - 101;
var offsetSpecsB = $("#specsEnd").offset().top - 101;
var offsetPhotos = $("#photos").offset().top - 101;
var offsetPhotosB = $("#photosEnd").offset().top - 101;
var offsetRatings = $("#ratings").offset().top - 101;
var offsetRatingsB = $("#ratingsEnd").offset().top - 101;

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > (offsetDetails) && y < (offsetDetailsB)) {
    	$('#navDetails').css("font-weight","bold");
  	 } else {
    	$('#navDetails').css("font-weight","normal");
  	}
}
)

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > (offsetPhotos) && y < (offsetPhotosB)) {
    	$('#navPhotos').css("font-weight","bold");
  	 } else {
    	$('#navPhotos').css("font-weight","normal");
  	}
}
)

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > (offsetSpecs) && y < (offsetSpecsB)) {
    	$('#navSpecs').css("font-weight","bold");
  	 } else {
    	$('#navSpecs').css("font-weight","normal");
  	}
}
)

$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > (offsetRatings) && y < (offsetRatingsB)) {
    	$('#navRatings').css("font-weight","bold");
  	 } else {
    	$('#navRatings').css("font-weight","normal");
  	}
}
)