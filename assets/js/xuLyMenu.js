var menuToggle = function () {
    var menu = document.getElementById("menuDanhMuc");
    var img = document.getElementById("menuIcon");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        img.src = "./assets/icons/close.png";
        event.stopPropagation();
    } else {
        menu.style.display = "none";
        img.src = "./assets/icons/menu.png";
    }
}

var menuTKToggle = function () {
    var menu2 = document.getElementById("menuAccount");
    if (menu2.style.display === "none") {
        menu2.style.display = "block";
        event.stopPropagation();
    } else {
        menu2.style.display = "none";
    }
}