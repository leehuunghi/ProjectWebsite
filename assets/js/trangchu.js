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
	 $("#nguoiMua").click(function(event) {
		window.location.href='./infoUpdate.html';
	});
	 $(".itemProduct").click(function(event) {
	 	window.location.href= "./productDetail.html";
	 });
	 $(".item").click(function(event) {
	 	window.location.href= "./productDetail.html";
	 });
	 $(".btnThemDetail").click(function(event) {
	 	localStorage["soSanPham"]=+localStorage["soSanPham"]+1;
	 });
	  $(".btnSoSanh").click(function(event) {
	 	window.location.href= "./compare.html";
	 });
	  $("#nhanHang").click(function(event) {
		window.location.href='./receiverUpdate.html';
	});
	  $(".idCapNhat").click(function(event) {
		window.location.href='./infoAccount.html';
	});

	  $(".buttonMuaSam").click(function(event) {
		window.location.href='./index.html';
	});
	  
});

window.onload = function(){
  	var guiTuIndex=localStorage["selectedKeyword"];
  	var setText=document.getElementById("txtTimKiemGoiY");
  	setText.innerHTML = guiTuIndex;
 }