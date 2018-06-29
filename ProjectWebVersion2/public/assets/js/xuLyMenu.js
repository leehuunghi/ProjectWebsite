var menu = document.getElementById("menuDanhMuc");
var img = document.getElementById("menuIcon");
var menu2 = document.getElementById("menuAccount");


var menuToggle = function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        img.src = "/assets/icons/close.png";
        event.stopPropagation();
        menu2.style.display = "none";
    } else {
        menu.style.display = "none";
        img.src = "/assets/icons/menu.png";
    }
}

var menuTKToggle = function () {
    if (menu2.style.display === "none") {
        menu2.style.display = "block";
        event.stopPropagation();
        menu.style.display = "none";
        img.src = "/assets/icons/menu.png";
    } else {
        menu2.style.display = "none";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    document.getElementById("menuDanhMuc").style.display = "none";
    document.getElementById("menuIcon").src = "/assets/icons/menu.png";
    document.getElementById("menuAccount").style.display = "none";
}