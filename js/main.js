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


/* inserisco separatamente le immagini nei diversi contenitori per poter customizzare le classi */

/* inserisco le immagini nelle thumbnails */
for (i = 0; i < images.length; i++) {
    console.log(i);

    /* appena comincia il ciclo*/
    /* creo un elemento */
    const thumbnail_El = document.createElement("div");
    console.log(thumbnail_El)
    /* a cui asssegno una classe */
    thumbnail_El.classList.add("thumnails");

    /*se siamo alla prima posizione del ciclo */
    if (i === 0) {
        active = "active"

        /* ne assegno anche un'altra (active stilizzata in css) */
        thumbnail_El.classList.add("active");
    }

/* CONTEMPORANEAMENTE (perchè è procedurale) */

 /* nel contenitore stampo ogni elemento creato incrementato dell'immagine dell'array con indice ===i */
     thumbnailsContainer_El.innerHTML+= thumbnail_El.innerHTML += images[i];
}





/* INIZIO FUNZIONE NEXT  ***************************************/

btnNext.addEventListener("click", function () {
    counter += 1


});