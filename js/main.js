/********************************************
                ELEMENTI
********************************************/

/* SLIDER CONTAINER */
const sliderContainer_El = document.getElementById("slider-container");
//console.log(sliderContainer_El);

/* THUMBNAILS CONTAINER */
const thumbnailsContainer_El = document.querySelector("#thumbnails-container .row");
//console.log(thumbnailsContainer_El);

/****** BOTTONI *******************************/

/* btn prev */
const btnPrev = document.querySelector(".btn-preview");
//console.log(btnPrev);

/* btn next */
const btnNext = document.querySelector(".btn-next");
//console.log(btnNext);

/* contatore */
let counter = 0;

/* ARRAY IMMAGINI */

const images = [
    `<img src="/img/01.webp" >`
    , `<img src="/img/02.webp">`
    , `<img src="/img/03.webp">`
    , `<img src="/img/04.webp">`
    , `<img src="/img/05.webp">`
]
//console.log(images);



/* inserisco le immagini nelle thumbnails */
for (i = 0; i < images.length; i++) {
}

    /***** appena comincia il ciclo ******************/




    /* INIZIO FUNZIONE NEXT  ***************************************/

    btnNext.addEventListener("click", function () {
        counter += 1


    });

