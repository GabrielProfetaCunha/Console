var menu = document.querySelector(".menulist");
menu.style.maxHeight = "0px";

function clicou() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "130px";
    } else {
        menu.style.maxHeight = "0px";
    }
}
