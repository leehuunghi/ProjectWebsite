$(document).ready(function () {
	if (sessionStorage.getItem("soSanPham")) {
		$("#Count").text(sessionStorage.getItem("soSanPham"));
	}
	else {
		$("#Count").text(0);
	}
	$("#gioHang").click(function (event) {
		if ($("#Count").text() == "0") {
			this.setAttribute("href", "./cartEmpty.html");
		}
		else {
			this.setAttribute("href", "./cart.html");
		}
	}); 
	$("#dienthoai").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#maytinhbang").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#samsung").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#htc").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#apple").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#oppo").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#xiaomi").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#sony").click(function (event) {
		window.location.href = './productView.html';
	});
	$("#buttonDangNhap").click(function (event) {
		window.location.href = './login.html';
	});
	$("#btnDangKy").click(function (event) {
		window.location.href = './signup.html';
	});

	$(".btnThanhToan").click(function (event) {
		window.location.href = './confirmPurchase.html';
	});
	 $("#nguoiMua").click(function(event) {
		window.location.href = './infoUpdate.html';
	});
	$(".itemProduct").click(function (event) {
		window.location.href = "./productDetail.html";
	});
	$(".itemIndex").click(function (event) {
		window.location.href = "./productDetail.html";
	});
	$(".btnThemVaoGio").click(function (event) {
		if (sessionStorage.getItem("soSanPham")) {
			sessionStorage.setItem("soSanPham", +sessionStorage.getItem("soSanPham") + 1);
		}
		else {
			sessionStorage.setItem("soSanPham", 1);
		}
		$("#Count").text(sessionStorage.getItem("soSanPham"));
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

	  $(".btnXacNhan").click(function(event) {
		window.location.href='./package.html';
	});

	  $(".btnHuy").click(function(event) {
		window.location.href='./cart.html';
	});	  

	$("#phanXemThem").click(function(event) {
		$("#phanXemThem").hide();
		$(".themNsx").slideDown('fast');
		$("#phanThuGonNSX").show();
	});

	$("#phanThuGonNSX").click(function(event) {
		$(".themNsx").slideUp('fast');
		$("#phanThuGonNSX").hide();
		$("#phanXemThem").show();
	});

	 $('ul li a').click(function () {
                $('ul li.active').removeClass('active');
                $(this).closest('li').addClass('active');
     });
});

window.onload = function () {
	var guiTuIndex = localStorage["selectedKeyword"];
	var setText = document.getElementById("txtTimKiemGoiY");
	setText.innerHTML = guiTuIndex;

}