  $(document).ready(function() {
  $("#gioHang").click(function(event) {
    if ($("#Count").text()=="0"){
      this.setAttribute("href", "./cartEmpty.html");
    }
    else{
      this.setAttribute("href", "./cart.html");
    }
  });
  $("#dienthoai").click(function(event) {
		window.location.href='./productView.html';
	});
   $("#maytinhbang").click(function(event) {
		window.location.href='./productView.html';
	});
    $("#samsung").click(function(event) {
		window.location.href='./productView.html';
	});
	 $("#htc").click(function(event) {
		window.location.href='./productView.html';
	});
	  $("#apple").click(function(event) {
		window.location.href='./productView.html';
	});
	  $("#oppo").click(function(event) {
		window.location.href='./productView.html';
	});
	   $("#xiaomi").click(function(event) {
		window.location.href='./productView.html';
	});
	    $("#sony").click(function(event) {
		window.location.href='./productView.html';
	});
	     $("#buttonDangNhap").click(function(event) {
		window.location.href='./login.html';
	});
	 $("#btnDangKy").click(function(event) {
		window.location.href='./signup.html';
	});

	 $(".btnThanhToan").click(function(event) {
		window.location.href='./confirmPurchase.html';
	});
});
