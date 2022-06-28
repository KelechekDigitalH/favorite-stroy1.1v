const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const popupBtn = document.querySelector('.popup-btn');
if (burger) {
	burger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		popupBtn.classList.toggle('unvisible');
	});


const menuBtn2 = document.querySelector('.popup-btn2');
  menuBtn2.addEventListener("click", (item)=> {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
  });

}




