window.addEventListener("load", function () {
    const menuBtn = document.querySelector(".popup-btn");
    const window = document.querySelector(".popout");
    const windowClose = document.querySelector(".popout__close-icon");

    menuBtn.addEventListener("click", function () {
        window.classList.toggle("active");
    });

    windowClose.addEventListener("click", function () {
        window.classList.remove("active");

    });

    const menuBtn1 = document.querySelector(".popup-btn1");
    const window1 = document.querySelector(".popout");
    const windowClose1 = document.querySelector(".popout__close-icon");

    menuBtn1.addEventListener("click", function () {
        window1.classList.toggle("active");
    });

    windowClose1.addEventListener("click", function () {
        window1.classList.remove("active");

    });

    const menuBtn2 = document.querySelector(".popup-btn2");
    const window2 = document.querySelector(".popout");
    const windowClose2 = document.querySelector(".popout__close-icon");
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');

    menuBtn2.addEventListener("click", function () {
        window2.classList.toggle("active");
        menu.classList.remove('active');
        burger.classList.toggle('active');
    });

    windowClose2.addEventListener("click", function () {
        window2.classList.remove("active");

    });
});