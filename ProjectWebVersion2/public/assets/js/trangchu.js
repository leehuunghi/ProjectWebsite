$(document).ready(function () {
	if (localStorage.getItem("username")) {
		$("#navUsername").show();
	}
	else {
		$("#navDangKy").show();
		$("#navDangNhap").show();
	}
	$("#dienthoai").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#maytinhbang").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#samsung").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#htc").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#apple").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#oppo").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#xiaomi").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#sony").click(function (event) {
		window.location.href = '/product-view';
	});
	$("#buttonDangNhap").click(function (event) {
		window.location.href = '/login';
	});
	$("#btnDangKy").click(function (event) {
		window.location.href = '/signup';
	});

	$(".btnThanhToan").click(function (event) {
		window.location.href = '/confirm-purchase';
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

	$('#backtop').hide();
	$("#nhanHang").click(function (event) {
		window.location.href = '/receiver-update';
	  });
	$(".btnSoSanh").click(function (event) {
		window.location.href = "/compare";
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
        $('#backtop').fadeIn();
      }
      else {
        $('#backtop').fadeOut();
      }
    }
    )

var clickKeyword = function (keyword) {
	localStorage["selectedKeyword"] = keyword.innerHTML;
}

window.onload = function () {
	var guiTuIndex = localStorage["selectedKeyword"];
	var setText = document.getElementById("txtTimKiemGoiY");

}

