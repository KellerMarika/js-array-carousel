/********************************************
                ELEMENTI
********************************************/

/* SLIDER CONTAINER */
const sliderContainer_El = document.getElementById("slider-container");
console.log(sliderContainer_El);
/* THUMBNAILS CONTAINER */
const thumbnailsContainer_El = document.querySelector("#thumbnails-container .row");
console.log(thumbnailsContainer_El);

/* array con immagini */
const images = [
    `<img src="/img/01.webp" alt="" >`
    , `<img src="/img/02.webp" alt="" >`
    , `<img src="/img/03.webp" alt="" >`
    , `<img src="/img/04.webp" alt="" >`
    , `<img src="/img/05.webp" alt="" >`
]
console.log(images);

/* inserisco le immagini nello slider e nelle thumbnails */
 for (i = 0; i < images.length; i++) {
    sliderContainer_El.innerHTML+= images[i];
    thumbnailsContainer_El.innerHTML+=images[i];
}

