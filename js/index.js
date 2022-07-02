//Tab Butttons

const planningBlock = document.querySelector(".planning__block");
const btns = document.querySelectorAll(".appartment-btn");
const contents = document.querySelectorAll(".appartment-content__inner");

planningBlock.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });

        e.target.classList.add("active");

        contents.forEach(function (content) {
            content.classList.remove("active");
        });

        const tabConent = document.getElementById(id);
        tabConent.classList.add("active");
    }
});

// Process

const ybtnContainer = document.querySelector(".process__year-btns-container")
const yearBtn = document.querySelectorAll(".process__year-btn")
const monthsBtns = document.querySelectorAll(".process__months-btns")

ybtnContainer.addEventListener("click", function (e) {
    const idY = e.target.dataset.id;

    if (idY) {
        yearBtn.forEach(function (btnY) {
            btnY.classList.remove("active");
        });

        e.target.classList.add("active");
        processImgsClose();
        processBtnsOpen();

        monthsBtns.forEach(function (months) {
            months.classList.remove("active");
        });

        const yeartabConent = document.getElementById(idY);
        yeartabConent.classList.add("active");
    }
});

const mbtnContainer = document.querySelector(".process__months-btns-container")
const monthBtn = document.querySelectorAll(".process__months-btn")
const processImgs = document.querySelectorAll(".process__imgs")

mbtnContainer.addEventListener("click", function (e) {
    const idM = e.target.dataset.id;

    if (idM) {
        monthBtn.forEach(function (btnM) {
            btnM.classList.remove("active");
        });

        e.target.classList.add("active");
        processImgsClose();
        processBtnsOpen();

        processImgs.forEach(function (imgs) {
            imgs.classList.remove("active");
        });

        const monthtabConent = document.getElementById(idM);
        monthtabConent.classList.add("active");
    }
});




//Carousel


let position1 = 0;
const slidesToShow1 = 1;
const slidesToScroll1 = 1;
const container = document.querySelector(".appartment-carousel__inner");
const track1 = document.querySelectorAll(".appartment-carousel__track");
// const item = document.querySelectorAll(".appartment-carousel__image");
const btnPrev1 = document.querySelectorAll(".appartment-carousel__prev-btn");
const btnNext1 = document.querySelectorAll(".appartment-carousel__next-btn");
const items1 = document.querySelectorAll(".appartment-carousel__image");
const itemsCount1 = items1.length/4;
const itemWidth1 = container.clientWidth / slidesToShow1;
const movePosition1 = slidesToScroll1 * itemWidth1;

items1.forEach((item) => {
    item.style.minWidth = `${itemWidth1}px`;
});

btnNext1.forEach(btnNext => {
    btnNext.addEventListener('click', () => {
        const itemsLeft1 = itemsCount1 - (Math.abs(position1) + slidesToShow1 * itemWidth1) / itemWidth1;
    
        position1 -= itemsLeft1 >= slidesToScroll1 ? movePosition1 : itemsLeft1 * itemWidth1;
        
        setPosition1();
        checkBtns1();
       
    });
});


btnPrev1.forEach(btnPrev => {
    btnPrev.addEventListener('click', () => {
        const itemsLeft1 = Math.abs(position1) / itemWidth1;
    
        position1 += itemsLeft1 >= slidesToScroll1 ? movePosition1 : itemsLeft1 * itemWidth1;
    
        setPosition1();
        checkBtns1();
    });
});


const setPosition1 = () => {
    track1.forEach(track => {track.style.transform = `translateX(${position1}px)`;});
};

const checkBtns1 = () => {
    btnPrev1.forEach(btnPrev => {
        btnPrev.disabled = position1 === 0;

        if (btnPrev.disabled = position1 === 0) {
            btnPrev.style.opacity = "0.3";
        } else {
            btnPrev.style.opacity = "1";
        }
    })
    
    btnNext1.forEach(btnNext => {
        btnNext.disabled = position1 <= -(itemsCount1 - slidesToShow1) * itemWidth1;

        if (btnNext.disabled = position1 <= - (itemsCount1 - slidesToShow1) * itemWidth1) {
            btnNext.style.opacity = "0.3";
        } else {
            btnNext.style.opacity = "1";
        }
    })
    
};    

checkBtns1();




//process

const processImgBtns = document.querySelectorAll(".process__img-btn");
const processImg = document.querySelectorAll(".process__img1");

processImgBtns.forEach(processImgBtn => {
    processImgBtn.addEventListener("click", function () {
        process.classList.add("active");
        processImgsOpen();
        processImgBtn.classList.add("none");
    });
})

const processImgsOpen = () => {
    processImg.forEach(processI => {
        processI.classList.add("active");
    })
};

const processImgsClose = () => {
    processImg.forEach(processI => {
        processI.classList.remove("active");
    })
};

const processBtnsOpen = () => {
    processImgBtns.forEach(processImgBtn => {
        processImgBtn.classList.remove("none");
    })
};