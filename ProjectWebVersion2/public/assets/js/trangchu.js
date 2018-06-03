$(document).ready(function () {
	if (sessionStorage.getItem("soSanPham")) {
		$("#Count").text(sessionStorage.getItem("soSanPham"));
	}
	else {
		$("#Count").text(0);
	}
	$("#gioHang").click(function (event) {
		if ($("#Count").text() == "0") {
			this.setAttribute("href", "/cart-empty");
		}
		else {
			this.setAttribute("href", "/cart");
		}
	});
	if (localStorage.getItem("username")) {
		$("#navUsername").show();
	}
	else {
		$("#navDangKy").show();
		$("#navDangNhap").show();
	}
	$("#dienthoai").click(function (event) {
		window.location.href = '/productView';
	});
	$("#maytinhbang").click(function (event) {
		window.location.href = '/productView';
	});
	$("#samsung").click(function (event) {
		window.location.href = '/productView';
	});
	$("#htc").click(function (event) {
		window.location.href = '/productView';
	});
	$("#apple").click(function (event) {
		window.location.href = '/productView';
	});
	$("#oppo").click(function (event) {
		window.location.href = '/productView';
	});
	$("#xiaomi").click(function (event) {
		window.location.href = '/productView';
	});
	$("#sony").click(function (event) {
		window.location.href = '/productView';
	});
	$("#buttonDangNhap").click(function (event) {
		window.location.href = '/login';
	});
	$("#btnDangKy").click(function (event) {
		window.location.href = '/signup';
	});

	$(".btnThanhToan").click(function (event) {
		window.location.href = '/confirmPurchase';
	});
	$("#nguoiMua").click(function (event) {
		window.location.href = '/info-update';
	});
	$(".itemProduct").click(function (event) {
		if ($(".btnThemVaoGio").is(":focus")) {

		}
		else {
			window.location.href = "/product-detail";
		}
	});
	$(".itemIndex").click(function (event) {
		window.location.href = "/product-detail";
	});
	$(".btnThemVaoGio").click(function (event) {
		if (sessionStorage.getItem("username")) {
			if (sessionStorage.getItem("soSanPham")) {
				sessionStorage.setItem("soSanPham", +sessionStorage.getItem("soSanPham") + 1);
			}
			else {
				sessionStorage.setItem("soSanPham", 1);
			}
			$("#Count").text(sessionStorage.getItem("soSanPham"));
		}
		else {

		}

	});

	$('#backtop').hide();

	$(".btnSoSanh").click(function (event) {
		window.location.href = "/compare";
	});
	$("#nhanHang").click(function (event) {
		window.location.href = '/receiverUpdate';
	});
	$(".idCapNhat").click(function (event) {
		window.history.back();
	});

	$(".buttonMuaSam").click(function (event) {
		window.location.href = '/home';
	});

	$(".btnXacNhan").click(function (event) {
		window.location.href = '/package';
	});

	$("#phanXemThem").click(function (event) {
		$("#phanXemThem").hide();
		$(".themNsx").slideDown('fast');
		$("#phanThuGonNSX").show();
	});

	$("#phanThuGonNSX").click(function (event) {
		$(".themNsx").slideUp('fast');
		$("#phanThuGonNSX").hide();
		$("#phanXemThem").show();
	});

	$('ul li a').click(function () {
		$('ul li.active').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	
	$('#visaContent').hide();
	$('#mastercardContent').hide();
	$('#napasContent').hide();

	$("#btnCOD").click(function (event) {
		$("#btnCOD").attr('style', 'background-color: #00ca6d');
		$("#btnVisa").attr('style', 'background-color: #fafafa');
		$("#btnMastercard").attr('style', 'background-color: #fafafa');
		$("#btnNapas").attr('style', 'background-color: #fafafa');
		$("#visaContent").slideUp('slow');
		$("#mastercardContent").slideUp('slow');
		$("#napasContent").slideUp('slow');
	});

	$("#btnVisa").click(function (event) {
		$("#btnVisa").attr('style', 'background-color: #00ca6d');
		$("#btnCOD").attr('style', 'background-color: #fafafa');
		$("#btnMastercard").attr('style', 'background-color: #fafafa');
		$("#btnNapas").attr('style', 'background-color: #fafafa');
		$("#mastercardContent").slideUp('fast');
		$("#napasContent").slideUp('fast');
		$("#visaContent").slideDown('slow');
	});

	$("#btnMastercard").click(function (event) {
		$("#btnMastercard").attr('style', 'background-color: #00ca6d');
		$("#btnVisa").attr('style', 'background-color: #fafafa');
		$("#btnCOD").attr('style', 'background-color: #fafafa');
		$("#btnNapas").attr('style', 'background-color: #fafafa');
		$("#visaContent").slideUp('fast');
		$("#napasContent").slideUp('fast');
		$("#mastercardContent").slideDown('slow');
	});

	$("#btnNapas").click(function (event) {
		$("#btnNapas").attr('style', 'background-color: #00ca6d');
		$("#btnVisa").attr('style', 'background-color: #fafafa');
		$("#btnMastercard").attr('style', 'background-color: #fafafa');
		$("#btnCOD").attr('style', 'background-color: #fafafa');
		$("#visaContent").slideUp('fast');
		$("#mastercardContent").slideUp('fast');
		$("#napasContent").slideDown('slow');
	});

	// $("#btnFind").click(function(event) {
	// 	if ($("#find").val()=="")
	// 	{
	// 		$(".square").attr('action', '/searchEmpty');
	// 	}
	// 	else
	// 	{
	// 		$(".square").attr('action', '/search');
	// 	}
	// });

	// $("#btnFindDT").click(function(event) {
	// 	if ($("#timKiemtrongDT").val()=="")
	// 	{
	// 		$(".squareDT").attr('action', '/searchEmpty');
	// 	}
	// 	else
	// 	{
	// 		$(".squareDT").attr('action', '/search');
	// 	}
	// });

	$(".btnHuy").click(function(event) {
		window.location.href = "/cart";
	});
});

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 528) {
        $('#backtop').show();
      }
      else {
        $('#backtop').hide();
      }
    }
    )

var clickKeyword = function (keyword) {
	localStorage["selectedKeyword"] = keyword.innerHTML;
}

window.onload = function () {
	var guiTuIndex = localStorage["selectedKeyword"];
	var setText = document.getElementById("txtTimKiemGoiY");
	setText.innerHTML = guiTuIndex;

}

