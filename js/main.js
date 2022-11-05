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
        active = "active"
    }

    const thumbnail_El = "thumbnail-img"

    //stampo le immagini con le classi appropriate
    thumbnailsContainer_El.innerHTML += `<img src=${images[i]} class= "${thumbnail_El} ${active} ">`;
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

    const slider_El = "slider-img"
    //stampo le immagini con le classi appropriate
    sliderContainer_El.innerHTML += `<img src=${images[i]} class=" ${slider_El} ${visibility}"  >`;
}



/* INIZIO FUNZIONE NEXT  ***************************************/
btnNext.addEventListener("click", function () {

    /* recuper le variabili Old prima del counter */
    //recupero la thumbnail corrispondente alla posizione start (al click diventa 1)
    const oldActiveThumb = document.querySelector(`#thumbnails-container :nth-child(${counter + 1})`);
    console.log("OLD T", oldActiveThumb);

    //recupero la slide corrispondente alla posizione start (al click diventa 1)
    const oldSliderImg = document.querySelector(`#slider-container :nth-child(${counter + 1})`);

    /* a ogni cick incremento il counter di 1. è lo stesso che scrivere counter+=1 */
    counter++
    console.log("btnNext click", counter)


    //lenght è =5 ma il counter parte da 0 quindi l'ultimo valore disponibile è lenght -1
    //se il contatore del bottone è maggiore dlla lenght di images 
    if (counter > (images.length - 1)) {
        // console.log("counter if=", counter, images.length);
        // ricomincia d'accapo_______________________________________________________________ci devo ragionare
        counter = images.length - 1
        btnNext.classList.add("disabled");
        //console.log(btnNext);   
    }

    //recupero la thumbnail corrispondente alla posizione dopo il click (+1)
    const currentActiveThumb = document.querySelector(`#thumbnails-container :nth-child(${counter + 1})`);
    console.log("currentActiveT =", currentActiveThumb);

    // dopo il click rimuovo active dall'immagine 
    oldActiveThumb.classList.remove("active");
    // dopo il click rimuovo active dall'immagine default 
    currentActiveThumb.classList.add("active")


    //recupero la slide corrispondente alla posizione dopo il click (+1)
    const currentSliderImg = document.querySelector(`#slider-container :nth-child(${counter + 1})`);

    // dopo il click rimuovo active dall'immagine 
    oldSliderImg.classList.add("visually-hidden");
    //console.log(oldSliderImg, oldSliderImg.classList);
    // dopo il click rimuovo active dall'immagine default 
    currentSliderImg.classList.remove("visually-hidden");
    //console.log(currentSliderImg, currentSliderImg.classList);
});



/* INIZIO FUNZIONE PREV ***************************************/
btnPrev.addEventListener("click", function () {
    /* recuper le variabili Old prima del counter */
    //recupero la thumbnail corrispondente alla posizione start (al click diventa 1)
    const oldActiveThumb = document.querySelector(`#thumbnails-container :nth-child(${counter + 1})`);
    console.log("OLD T", oldActiveThumb);

    //recupero la slide corrispondente alla posizione start (al click diventa 1)
    const oldSliderImg = document.querySelector(`#slider-container :nth-child(${counter + 1})`);

    /* a ogni cick incremento il counter di 1. è lo stesso che scrivere counter+=1 */
    counter -= 1
    console.log("btnPrev click", counter)


    //lenght è =5 ma il counter parte da 0 quindi l'ultimo valore disponibile è lenght -1
    //se il contatore del bottone è maggiore dlla lenght di images 
    if (counter < 0) {
        // console.log("counter if=", counter, images.length);
        // ricomincia d'accapo_______________________________________________________________ci devo ragionare
        counter = 0
        btnPrev.classList.add("disabled");
        //console.log(btnNext);   
    }

    //recupero la thumbnail corrispondente alla posizione dopo il click (+1)
    const currentActiveThumb = document.querySelector(`#thumbnails-container :nth-child(${counter + 1})`);
    console.log("currentActiveT =", currentActiveThumb);

    // dopo il click rimuovo active dall'immagine 
    oldActiveThumb.classList.remove("active");
    // dopo il click rimuovo active dall'immagine default 
    currentActiveThumb.classList.add("active")


    //recupero la slide corrispondente alla posizione dopo il click (+1)
    const currentSliderImg = document.querySelector(`#slider-container :nth-child(${counter + 1})`);

    // dopo il click rimuovo active dall'immagine 
    oldSliderImg.classList.add("visually-hidden");
    //console.log(oldSliderImg, oldSliderImg.classList);
    // dopo il click rimuovo active dall'immagine default 
    currentSliderImg.classList.remove("visually-hidden");
    //console.log(currentSliderImg, currentSliderImg.classList);
});


//se schiaccio una thumbnail allora le altre si disattivano e viene mostrata la slide img corrispondente

for (i = 0; i < images.length; i++) {

    //tumb che attivo al click
    let thumbnailBtn = document.querySelector(`#thumbnails-container :nth-child(${i + 1})`);
    console.log(thumbnailBtn, "thumbnailBtn");

    //array tutte le altre thumb
    let thumbnailUnactive = document.querySelectorAll(`#thumbnails-container img:not(:nth-child(${i + 1}))`);
    console.log(thumbnailUnactive, "thumbnail-to-disactivate");


    //slide che corrisponde alla tumb che cliccherò
    let sliderImg = document.querySelector(`#slider-container :nth-child(${i + 1})`);
    console.log(sliderImg, " sliderImg");

    //array tutte le altre slider img da nascondere
    let sliderImagesInvisible = document.querySelectorAll(`#slider-container img:not(:nth-child(${i + 1}))`);
    console.log(sliderImagesInvisible, "sliderImages-to-disactivate");






}
