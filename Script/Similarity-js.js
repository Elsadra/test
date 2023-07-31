$(document).ready(function () {
    let btn_open_sub_menu = document.querySelector(".btn-sub-menu-open");
    let line_one = document.querySelector(".line-one");
    let line_two = document.querySelector(".line-two");
    let ul_sub_menu = document.querySelector(".ul-sub-menu");
    let slider_sub_menu = document.querySelector(".slider-sub-menu");
    let sub_menu = document.querySelector(".sub-menu");
    let nav = document.getElementById("nav");
    // Start sub-menu
    var Is_Open_Sub_Menu = false;
    btn_open_sub_menu.addEventListener("click", function () {
        if (!Is_Open_Sub_Menu) {
            Is_Open_Sub_Menu = true;
            line_one.classList.remove("line-one");
            line_two.classList.remove("line-two");
            line_one.classList.add("line-one-click");
            line_two.classList.add("line-two-click");
            ul_sub_menu.style.position = "fixed";
            ul_sub_menu.style.top = "3.5rem";
            ul_sub_menu.style.right = "0%";
            ul_sub_menu.style.transition = ".4s";
            line_two.classList.add("line-two-click");
            slider_sub_menu.style.position = "fixed";
            slider_sub_menu.style.top = "3.5rem";
            slider_sub_menu.style.right = "50%";
            slider_sub_menu.style.transition = ".5s";
            sub_menu.style.transition = ".5s";
            sub_menu.style.backgroundColor = "#55555525";
        } else {
            Is_Open_Sub_Menu = false;
            line_one.classList.add("line-one");
            line_two.classList.add("line-two");
            line_one.classList.remove("line-one-click");
            line_two.classList.remove("line-two-click");
            ul_sub_menu.style.position = "fixed";
            ul_sub_menu.style.top = "3.5rem";
            ul_sub_menu.style.right = "-50%";
            ul_sub_menu.style.transition = ".4s";
            slider_sub_menu.style.position = "fixed";
            slider_sub_menu.style.top = "3.5rem";
            slider_sub_menu.style.right = "-50%";
            slider_sub_menu.style.transition = ".4s";
            sub_menu.style.transition = ".5s";
            sub_menu.style.backgroundColor = "#00000000";
        }
    })

    slider_sub_menu.addEventListener("click", function () {
        if (!Is_Open_Sub_Menu) {} else {
            line_one.classList.add("line-one");
            line_two.classList.add("line-two");
            line_one.classList.remove("line-one-click");
            line_two.classList.remove("line-two-click");
            ul_sub_menu.style.position = "fixed";
            ul_sub_menu.style.top = "3.5rem";
            ul_sub_menu.style.right = "-50%";
            ul_sub_menu.style.transition = ".4s";
            slider_sub_menu.style.position = "fixed";
            slider_sub_menu.style.top = "3.5rem";
            slider_sub_menu.style.right = "-50%";
            slider_sub_menu.style.transition = ".4s";
            sub_menu.style.transition = ".5s";
            sub_menu.style.backgroundColor = "#00000000";
        }
    })

    // End sub-menu
})