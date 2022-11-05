/********************************************
                ELEMENTI
********************************************/

/* SLIDER CONTAINER */
const sliderContainer_El = document.getElementById("slider-container");
//console.log(sliderContainer_El);

/* THUMBNAILS CONTAINER */
const thumbnailsContainer_El = document.querySelector("#thumbnails-container");
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
    `"/img/01.webp" `
    , `"/img/02.webp"`
    , `"/img/03.webp"`
    , `"/img/04.webp"`
    , `"/img/05.webp"`
]
//console.log(images);



/************ THUBNAILS *****************************/

for (i = 0; i < images.length; i++) {
    // console.log(i);

    /*appena comincia il ciclo */
    //classe active di bootstrap. la appico unicamente all'elemento attivo 
    let active = ""
    //console.log(active);
    //(ad inizializzazione pagina l'elelmento attivo è il primo perciò)
    if (i === 0) {
        // active = "active"
    }

    //stampo le immagini con le classi appropriate
    thumbnailsContainer_El.innerHTML += `<img src=${images[i]} class= ${active}>`;
}


/************ SLIDER CONTAINER (per effetti) *****************************/

for (i = 0; i < images.length; i++) {
    //console.log(i);

    /*appena comincia il ciclo */
    //classe visually-hidden di bootstrap. la appico a tutti gli elementi eccetto il primo
    let visibility = "visually-hidden"
    //console.log(visibility);
    // il primo elemento deve essere visibile
    if (i === 0) {
        visibility = ""
    }
    //stampo le immagini con le classi appropriate
    sliderContainer_El.innerHTML += `<img src=${images[i]} class= ${visibility}>`;
}


/* INIZIO FUNZIONE NEXT  ***************************************/
console.log(btnNext)
console.log(btnPrev)

btnPrev.addEventListener("click", function () {
    counter+=1

    console.log("btnPrev click");
})
btnNext.addEventListener("click", function () {
    counter+=1

    console.log("btnNext click");
})
/* btnPrev */

/* inserisco le immagini nelle thumbnails */
/* for (i = 0; i < images.length; i++) {
    console.log(i);
 */
/* appena comincia il ciclo*/
/* creo un elemento */
/*     const thumbnail_El = document.createElement("div");
    console.log(thumbnail_El)
    /* a cui asssegno una classe */
/*  thumbnail_El.classList.add("thumnails"); */

/*se siamo alla prima posizione del ciclo */
/*    if (i === 0) {
       active = "active"
*/
/* ne assegno anche un'altra (active stilizzata in css) */
/*        thumbnail_El.classList.add("active");
   }
} */
