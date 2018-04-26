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
	if(sessionStorage.getItem("username"))
	{
		$("#navUsername").show();
	}
	else{
		$("#navDangKy").show();
		$("#navDangNhap").show();
	}
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
		if ($(".btnThemVaoGio").is(":focus")) {
			
		}
		else {
			window.location.href = "./productDetail.html";
		}
	});
	$(".itemIndex").click(function (event) {
		window.location.href = "./productDetail.html";
	});
	$(".btnThemVaoGio").click(function (event) {
		if (sessionStorage.getItem("username")){
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

	  $(".btnSoSanh").click(function(event) {
	 	window.location.href= "./compare.html";
	 });
	  $("#nhanHang").click(function(event) {
		window.location.href='./receiverUpdate.html';
	});
	  $(".idCapNhat").click(function(event) {
		window.history.back();
	});

	  $(".buttonMuaSam").click(function(event) {
		window.location.href='./index.html';
	});

	  $(".timKiemSP").click(function(event) {
	  	window.location.href='./searchByName.html';
	  });

	  $(".btnXacNhan").click(function(event) {
		window.location.href='./package.html';
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

     $("#btnDangNhap").click(function(){
        sessionStorage.setItem("username","TranThiNha");
        window.location.href="./index.html";
      });

     $('#visaContent').hide();
	 $('#mastercardContent').hide();
	 $('#napasContent').hide();

     $("#btnCOD").click(function(event) {
     	$("#btnCOD").attr('style','background-color: #00ca6d');
     	$("#btnVisa").attr('style','background-color: #fafafa');
     	$("#btnMastercard").attr('style','background-color: #fafafa');
     	$("#btnNapas").attr('style','background-color: #fafafa');
	 	$("#visaContent").slideUp('slow');
	 	$("#mastercardContent").slideUp('slow');
	 	$("#napasContent").slideUp('slow');
	 });

	 $("#btnVisa").click(function(event) {
     	$("#btnVisa").attr('style','background-color: #00ca6d');
     	$("#btnCOD").attr('style','background-color: #fafafa');
     	$("#btnMastercard").attr('style','background-color: #fafafa');
     	$("#btnNapas").attr('style','background-color: #fafafa');
	 	$("#mastercardContent").slideUp('fast');
	 	$("#napasContent").slideUp('fast');
	 	$("#visaContent").slideDown('slow');
	 });

	 $("#btnMastercard").click(function(event) {
     	$("#btnMastercard").attr('style','background-color: #00ca6d');
     	$("#btnVisa").attr('style','background-color: #fafafa');
     	$("#btnCOD").attr('style','background-color: #fafafa');
     	$("#btnNapas").attr('style','background-color: #fafafa');
	 	$("#visaContent").slideUp('fast');
	 	$("#napasContent").slideUp('fast');
	 	$("#mastercardContent").slideDown('slow');
	 });

	 $("#btnNapas").click(function(event) {
     	$("#btnNapas").attr('style','background-color: #00ca6d');
     	$("#btnVisa").attr('style','background-color: #fafafa');
     	$("#btnMastercard").attr('style','background-color: #fafafa');
     	$("#btnCOD").attr('style','background-color: #fafafa');
	 	$("#visaContent").slideUp('fast');
	 	$("#mastercardContent").slideUp('fast');
	 	$("#napasContent").slideDown('slow');
	 });

	 $(':input[id="btnDangNhap"]').prop('disabled', true);
	 var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

	 $('#emailInput').blur(function() {
   	 	if (this.value === ''){
    		$('#alertLoginEmail').html("Không được để trống");
			$('#emailInput').attr('style','border: 1px solid #ff3c00; box-shadow: 0px  0px 10px rgba(255,60,0,0.5);');
			$('#emailInput').removeClass("validInput");
    	}
    	else {
    		if (testEmail.test(this.value)){
    			$('#alertLoginEmail').html('&nbsp;');
    			$('#emailInput').attr('style','');
    			$('#emailInput').addClass("validInput");
    		}
    		else {
				$('#alertLoginEmail').html("Email không hợp lệ");
				$('#emailInput').attr('style','border: 1px solid #ff3c00; box-shadow: 0px  0px 10px rgba(255,60,0,0.5);');
				$('#emailInput').removeClass("validInput");
			}
	 }
});

	 $('#passInput').blur(function() {
   	 	if (this.value === ''){
    		$('#alertLoginPass').html("Không được để trống");
			$('#passInput').attr('style','border: 1px solid #ff3c00; box-shadow: 0px  0px 10px rgba(255,60,0,0.5);');
			$('#passInput').removeClass("validInput");
    	}
    	else {
    		$('#alertLoginPass').html("&nbsp;");
			$('#passInput').attr('style','');
			$('#passInput').addClass("validInput");
    	}location
    });


	if ($('#emailInput').hasClass("validInput")){
		$(':input[id="btnDangNhap"]').prop('disabled', false);​};


});

 var clickKeyword = function (keyword) {
      localStorage["selectedKeyword"] = keyword.innerHTML;
 }

window.onload = function () {
	var guiTuIndex = localStorage["selectedKeyword"];
	var setText = document.getElementById("txtTimKiemGoiY");
	setText.innerHTML = guiTuIndex;

}

