//variaveis com classes

var tabLinks = document.getElementsByClassName("tab-links");
    tabContents = document.getElementsByClassName("tab-contents");

//ativar o botão das skills

function openTab(tabname) {
    for (item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

//abrir menu

var sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

//fechar menu

function closeMenu(){
    sideMenu.style.right = "-200px";
}


