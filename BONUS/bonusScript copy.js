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
    `<img src="img/img1.png" alt="1"> `
    , `<img src="img/img2.png" alt="1">`
    , `<img src="img/img3.png" alt="1">`


    , `     <!---- FIRST FLOOR BLOCK ------------------------------------------------------>
    <div class="f1-container position-relative">
        <!---- FIRST IMG ----------->
        <img class="wall f1 img-fluid" src="/BONUS/img/f1/1-wall.png" alt="">
        <!---- FIRST SVG GROUP----------->
        <div class="svg-container f1">

            <svg class="living f1" width="439" height="430" viewBox="0 0 439 430" fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path d="M436.5 3H172H11L6.5 194L105 196V427H271.5V326.5H405.5V162H436.5V3Z" fill="#D9D9D9"
                    fill-opacity="" stroke="" stroke-opacity="" stroke-width="" />

                <path class="bath f1" d="M105.5 196L6.5 194L3 327.5H105.5V196Z" fill="#D9D9D9" fill-opacity=""
                    stroke="" stroke-opacity="" stroke-width="" />
            </svg>
        </div>
    </div>`


    , `  <!---- SECOND FLOOR BLOCK ------------------------------------------------------>
    <div class="f2-container position-relative">
        <!---- SECOND IMG ----------->
        <img class="wall f1 img-fluid" src="/BONUS/img/f2/2-wall.png" alt="">
        <!---- SECOND IMG ----------->
        <div class="svg-container f2">
            <!---- SECOND SVG GROUP----------->
            <svg width="440" height="429" viewBox="0 0 440 429" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path class="study f2" d="M405.5 161H270.5V325.5H405.5V161Z" fill="#D9D9D9" fill-opacity=""
                    stroke="" stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="room f2" d="M271 160.5V3H437V160.5H271Z" fill="#D9D9D9" fill-opacity="" stroke=""
                    stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="corridor f2" d="M105.5 426V195H171.5V2.5H271V426H105.5Z" fill="#D9D9D9" fill-opacity=""
                    stroke="" stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="bath f2" d="M105.5 195L6.5 193L3 326.5H105.5V195Z" fill="#D9D9D9" fill-opacity=""
                    stroke="" stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />
            </svg>
        </div>
    </div>`
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
    //thumbnailsContainer_El.innerHTML += `<img src=${images[i]} class= "${thumbnail_El} ${active} ">`;
    thumbnailsContainer_El.innerHTML += `<div class= "${thumbnail_El} ${active} ">
    ${images[i]} 
    
    </div>`;



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
    sliderContainer_El.innerHTML += `<div class=" ${slider_El} ${visibility}"> 
    ${images[i]} 
    </div>`;
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
    //console.log(thumbnailBtn, "thumbnailBtn");

    //array tutte le altre thumb
    let thumbnailsUnactive = document.querySelectorAll(`#thumbnails-container img:not(:nth-child(${i + 1}))`);

    //console.log(thumbnailsUnactive, "thumbnail-to-disactivate");


    //slide che corrisponde alla tumb che cliccherò
    let sliderImg = document.querySelector(`#slider-container :nth-child(${i + 1})`);
    //console.log(sliderImg, " sliderImg");

    //array tutte le altre slider img da nascondere
    let sliderImagesInvisible = document.querySelectorAll(`#slider-container img:not(:nth-child(${i + 1}))`);
    //console.log(sliderImagesInvisible, "sliderImages-to-disactivate");

    thumbnailBtn.addEventListener("click", function () {

        sliderImg.classList.remove("visually-hidden");
        thumbnailBtn.classList.add("active");


        /******** CICLE IN THE CICLE!!!  ***********************************************************/
        /* non si fa così ma mi serviva */
        /* scusa florian dovevo provarci! */
        
        for (ii = 0; ii < images.length - 1; ii++) {

            /*      console.log("dentro for 2 CICLE IN THE CICLE .......................")
                    console.log(i)
                    console.log(ii)
                    console.log("thumbnailsUnactive[ii]", thumbnailsUnactive[ii])
                    console.log("thumbnailsUnactive[ii].className", thumbnailsUnactive[ii].className);
                    console.log("thumbnailsUnactive[ii].classList", thumbnailsUnactive[ii].classList);
                    thumbnailsUnactive[ii].classList.toggle("active", false)
                    console.log("toggle su class list")
                    console.log("thumbnailsUnactive[ii].className =", thumbnailsUnactive[ii].className);
          */
            thumbnailsUnactive[ii].classList.toggle("active", false);
            sliderImagesInvisible[ii].classList.toggle("visually-hidden", true);
        }

    })
}