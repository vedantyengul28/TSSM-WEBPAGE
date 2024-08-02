const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')

let slideNumber = 1;
const length = images.length
const nextSlide = ()=>{   
    slider.style.transform = `translateX(-${slideNumber*1100}px)`
    slideNumber++
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber -2)*1100}px)`
    slideNumber--
}

const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*1100}px)`
    slideNumber = length
}

left.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() : getFirstSlide()
})

right.addEventListener('click', ()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide()
})

// Start Auto slideshow

let sliderInterval;

const startSlideShow = ()=>{
    sliderInterval = setInterval(()=>{
        slideNumber < length ? nextSlide() : getFirstSlide();
    },5000)
}

const stopSlideShow = ()=>{
    clearInterval(sliderInterval);
}

startSlideShow();

left.addEventListener('mouseover', stopSlideShow)
left.addEventListener('mouseout', startSlideShow)
right.addEventListener('mouseover', stopSlideShow)
right.addEventListener('mouseout', startSlideShow)
