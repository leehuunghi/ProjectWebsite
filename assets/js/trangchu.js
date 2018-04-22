  $(document).ready(function() {
  $("#gioHang").click(function(event) {
    if ($("#Count").text()=="0"){
      this.setAttribute("href", "./cartEmpty.html");
    }
    else{
      this.setAttribute("href", "./cart.html");
    }
  });
});