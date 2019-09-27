//Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Zähler (3 Bilder werden auf einmal angezeigt und weitergescrollt)
let counter = 0;
let size = 3 * carouselImages[0].clientWidth;

//Button Listeners Next/Prev
nextBtn.addEventListener('click',()=>{
    size = 3 * carouselImages[0].clientWidth;
    if (counter >= carouselImages.length/3 -1) { return; } else {

        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter ++;
    
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});

prevBtn.addEventListener('click',()=>{
    size = 3 * carouselImages[0].clientWidth;
    if (counter <= 0) { return; } else { 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});

//Korrektur der Bildanzeige bei Vergrößern und Verkleinern des Bildes
window.onresize = () => { 
    size = 3 * carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};
