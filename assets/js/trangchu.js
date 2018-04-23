  $(document).ready(function() {
  $("#gioHang").click(function() {
    if ($("#Count").text()=="0"){
      this.setAttribute("href", "./cartEmpty.html");
    }
    else{
      this.setAttribute("href", "./cart.html");
    }
  });
  $("#dienthoai").click(function() {
		window.location.href='./productView.html';
	});
   $("#maytinhbang").click(function() {
		window.location.href='./productView.html';
	});
    $("#samsung").click(function() {
		window.location.href='./productView.html';
	});
	 $("#htc").click(function() {
		window.location.href='./productView.html';
	});
	  $("#apple").click(function() {
		window.location.href='./productView.html';
	});
	  $("#oppo").click(function() {
		window.location.href='./productView.html';
	});
	   $("#xiaomi").click(function() {
		window.location.href='./productView.html';
	});
	    $("#sony").click(function() {
		window.location.href='./productView.html';
	});
	     $("#buttonDangNhap").click(function() {
		window.location.href='./login.html';
	});
	//  $("#btnDangKy").click(function() {
	// 	window.location.href='./signup.html';
	// });

	 $(".btnThanhToan").click(function() {
		window.location.href='./confirmPurchase.html';
	});

});
