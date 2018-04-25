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
	  		$("#starNum").text("1");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				this.setAttribute("src", "./assets/icons/rate.png");
				$("#starNum").text("0");
			}
	  	}
	  );

	  $(".1sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	this.setAttribute("src", "./assets/icons/rate-fill.png");
	  	$("#starNum").text("1");
	  });

	  $(".2sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  		$("#starNum").text("2");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");
	  			$("#starNum").text("0");
			}
	  	}
	  );

	  $(".2sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  	$("#starNum").text("2");
	  });

	  $(".3sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$("#starNum").text("3");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");	
	  			$(".3sao").attr("src", "./assets/icons/rate.png");	
	  			$("#starNum").text("0");
			}
	  	}
	  );

	  $(".3sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");		
	  	$("#starNum").text("3");
	  });

	  $(".4sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".4sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$("#starNum").text("4");
	  	},
		function(event) {
			if ($(this).hasClass('daChon')){
			}
			else {
				$(".2sao").attr("src", "./assets/icons/rate.png");
	  			$(".1sao").attr("src", "./assets/icons/rate.png");	
	  			$(".3sao").attr("src", "./assets/icons/rate.png");
	  			$(".4sao").attr("src", "./assets/icons/rate.png");	
	  			$("#starNum").text("0");
			}
	  	}
	  );

	  $(".4sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$(".3sao").toggleClass('daChon');
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".4sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$("#starNum").text("4");
	  });

	  $(".5sao").hover(
	  	function(event) {
	  		$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$(".4sao").attr("src", "./assets/icons/rate-fill.png");
	  		$(".5sao").attr("src", "./assets/icons/rate-fill.png");	
	  		$("#starNum").text("5");
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
	  			$("#starNum").text("0");	
			}
	  	}
	  );

	  $(".5sao").click(function(event) {
	  	$(this).toggleClass('daChon');
	  	$(".1sao").toggleClass('daChon');
	  	$(".2sao").toggleClass('daChon');
	  	$(".3sao").toggleClass('daChon');
	  	$(".4sao").toggleClass('daChon');
	  	$(".2sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".1sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".3sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$(".4sao").attr("src", "./assets/icons/rate-fill.png");
	  	$(".5sao").attr("src", "./assets/icons/rate-fill.png");	
	  	$("#starNum").text("5");
	  });
	 
	 $(".do").click(function(event) {
	 	$(".do").attr('stroke-width', '3');
	 	$(".den").attr('stroke-width', '0');
	 });

	 $(".den").click(function(event) {
	 	$(".den").attr('stroke-width', '3');
	 	$(".do").attr('stroke-width', '0');
	 });

	 $("#xemthemListen").click(function(event) {
	 	$("#xemthemListen").text("Thu gọn");
	 	$("#xemthemListen img").attr('src', './assets/icons/up-arrow.png');

	 });

		var layListen = document.getElementById("hideContent");
  		alert(layListen.id);
  		if (layListen=="hideContent"){
  			layListen.display = 'none';
  			layListen.display = 'block';
  		}
});
