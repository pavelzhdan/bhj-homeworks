let slideButton = document.getElementsByClassName("slider__arrow");

for(let i=0; i<slideButton.length; i++){
    slideButton[i].onclick = function (){
        let slides = document.getElementsByClassName("slider__item");
        let nextSlideStep;
        for(let f = 0; f< slides.length; f++){
            let activeIndexFound = slides[f].classList.contains("slider__item_active");
            if (activeIndexFound){
                let activeSlide = slides[f];
                activeSlide.classList.remove("slider__item_active");   
                if(slideButton[i].classList.contains("slider__arrow_prev")){
                    nextSlideStep= -1;
                    } else {
                        nextSlideStep = 1;
                    };
                let nextSlideIndex = f+nextSlideStep;
                console.log(nextSlideIndex);
                console.log(slides.length);
                switch(true){
                    case nextSlideIndex == slides.length:
                        nextSlideIndex = 0;
                        slides[nextSlideIndex].classList.add("slider__item_active");
                        console.log(nextSlideIndex);
                        break;
                    case nextSlideIndex == -1:
                        nextSlideIndex = Number(slides.length-1);
                        slides[nextSlideIndex].classList.add("slider__item_active");
                        console.log(nextSlideIndex);
                        break;
                    default:
                        slides[nextSlideIndex].classList.add("slider__item_active");
                };
                break
            };
        };
    };
};
