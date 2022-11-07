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


/* ARRAY DIV */
const images = [
    `<img src="img/img1.png" alt="panoramica"> `
    , `<img src="img/img2.png" alt="living">`
    , `<img src="img/img3.png" alt="pergolato">`
    , `<!---- FIRST FLOOR BLOCK -------->

    <div class="f1-container position-relative">
        <!---- FIRST IMG WALL ----------->
        <img class="wall f1 img-fluid" src="/BONUS/img/f1/1-wall.png" alt="top-view arredo PT">

        <!---- FIRST SVG GROUP----------->
        <div class="svg-container f1">

            <svg class="living f1" width="439" height="430" viewBox="0 0 439 430" fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path d="M436.5 3H172H11L6.5 194L105 196V427H271.5V326.5H405.5V162H436.5V3Z" fill="#D9D9D9"
                    fill-opacity="" stroke="" stroke-opacity="" stroke-width="" />

                <path class="bath f1" d="M105.5 196L6.5 194L3 327.5H105.5V196Z" fill="#D9D9D9" fill-opacity="" stroke=""
                    stroke-opacity="" stroke-width="" />
            </svg>
        </div>
    </div>`

    , `<!---- SECOND FLOOR BLOCK ------------------------------------------------------>
    <div class="f2-container position-relative">
        <!---- SECOND IMG WALL ----------->
        <img class="wall f1 img-fluid" src="/BONUS/img/f2/2-wall.png" alt="top-view arredo 1P">
        <!---- SECOND IMG ----------->
        <div class="svg-container f2">
            <!---- SECOND SVG GROUP----------->
            <svg width="440" height="429" viewBox="0 0 440 429" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path class="study f2" d="M405.5 161H270.5V325.5H405.5V161Z" fill="#D9D9D9" fill-opacity="" stroke=""
                    stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="room f2" d="M271 160.5V3H437V160.5H271Z" fill="#D9D9D9" fill-opacity="" stroke=""
                    stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="corridor f2" d="M105.5 426V195H171.5V2.5H271V426H105.5Z" fill="#D9D9D9" fill-opacity=""
                    stroke="" stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />

                <path class="bath f2" d="M105.5 195L6.5 193L3 326.5H105.5V195Z" fill="#D9D9D9" fill-opacity="" stroke=""
                    stroke-width="" stroke-opacity="0" stroke-opacity="" stroke-width="" />
            </svg>
        </div>
    </div>`



]

/* ARRAY thumbnails-container:before */

const thumbnailLabels = [`<h4 class="thumbnail-label img1">Facciata</h4>`
    , `<h4 class="thumbnail-label img2">living</h4>`
    , `<h4 class="thumbnail-label img3">pergolato</h4>`
    , `<h4 class="thumbnail-label img4"> PT</h4> `
    , `<h4 class="thumbnail-label img5"> 1P</h4>`
]

//console.log(thumbnailLabels);



//console.log(images);


//************ THUBNAILS *****************************___________________________________forse si potrebbero accorpare

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
    /* aggiungo una classe numerata per tenere  meglio traccia dei miei traffici sulla console */
    const thumbnail_El = "thumbnail-card " + (i + 1)

    //stampo I DIV CON LE IMMAGINI E LE SVG INDENTATE. 
    //è AI DIV CHE APPLICO LE classi appropriate

    thumbnailsContainer_El.innerHTML += `<div class= "${thumbnail_El} ${active} ">
    ${images[i]}  
    ${thumbnailLabels[i]}
    </div>`;
}


//************ SLIDER CONTAINER (per effetti) *****************************___________________________________forse si potrebbero accorpare

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
    //stampo I DIV CON LE IMMAGINI E LE SVG INDENTATE. 
    //è AI DIV CHE APPLICO LE classi appropriate

    sliderContainer_El.innerHTML += `<div class=" ${slider_El} ${visibility}"> 
    ${images[i]} 
    </div>`;
}

////tutte le thumb button disponibili
/* let thumbnailsAll = []
console.log("t ALL", thumbnailsAll)
 */
//se schiaccio una thumbnail allora le altre si disattivano e viene mostrata la slide img corrispondente

for (i = 0; i < images.length; i++) {

    //tumb che attivo al click
    let thumbnailBtn = document.querySelector(`#thumbnails-container> :nth-child(${i + 1})`);
    //console.log(thumbnailBtn, "thumbnailBtn");

/* 
    ////pusho all'interno dell'array vuoto tutte le thumb button disponibili create nel ciclo
    thumbnailsAll.push(thumbnailBtn);
    console.log("t ALL", thumbnailsAll)
 */


    //array tutte le altre thumb da disattivare
    let thumbnailsUnactive = document.querySelectorAll(`#thumbnails-container> .thumbnail-card:not(:nth-child(${i + 1}))`);

    //console.log(thumbnailsUnactive, "thumbnail-to-disactivate");


    //slide che corrisponde alla tumb che cliccherò
    let sliderImg = document.querySelector(`#slider-container> :nth-child(${i + 1})`);
    //console.log(sliderImg, " sliderImg");

    //array tutte le altre slider img da nascondere
    let sliderImagesInvisible = document.querySelectorAll(`#slider-container> .slider-img:not(:nth-child(${i + 1}))`);
    //console.log(sliderImagesInvisible, "sliderImages-to-disactivate");
/* 
    console.log(counter, "counter in cilco prima di btntumb")
    counter = 0 */
    //quando clicco su una thumb
   /*  thumbnailsAll[counter].addEventListener("click", function () { */
    thumbnailBtn.addEventListener("click", function () {
/*         console.log(couner, "counter dopo btntumb")
        console.log(" thumbnailsAll[i]", thumbnailsAll[i])
        counter = thumbnailBtn
        console.log(counter, "counter dopo btntumb")
 */
        console.log(thumbnailsUnactive, "thumbnail-to-disactivate");
        console.log(thumbnailBtn, "thumbbutton")

        //aggiungo lo stato active alla thumb
        thumbnailBtn.classList.add("active");
        //rimuovo la hodden alla slide corrispondente
        sliderImg.classList.remove("visually-hidden");

        /******** CICLE IN THE CICLE!!!  ***********************************************************/
        /* non si fa così ma mi serviva */
        /* scusa florian dovevo provarci! */


        //ciclicamente dopo
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
            //a tutte le thumb che non sono quella cliccate  rimuovo l'active
            thumbnailsUnactive[ii].classList.toggle("active", false);
            //a tutte le slide che non sono quella correlata alla thumb cliccata aggiungo la
            sliderImagesInvisible[ii].classList.toggle("visually-hidden", true);
        }

    });

}

/* 
      //devo ristabilire l'ordine di successione in base all'ultima thumb cliccata
      const oldActiveThumb = thumbnailBtn
      console.log("OLD T", oldActiveThumb)
 
     // dopo aver cliccato sulal tumb se poi clicco next 
 
 
 */

//INIZIO FUNZIONE NEXT  **************************************
btnNext.addEventListener("click", function () {

    // recuper le variabili Old prima del counter 
    //recupero la thumbnail corrispondente alla posizione start (al click diventa 1)
    const oldActiveThumb = document.querySelector(`#thumbnails-container> :nth-child(${counter + 1})`);
    console.log("OLD T", oldActiveThumb);

    //recupero la slide corrispondente alla posizione start (al click diventa 1)
    const oldSliderImg = document.querySelector(`#slider-container> :nth-child(${counter + 1})`);

    // a ogni cick incremento il counter di 1. è lo stesso che scrivere counter+=1 
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
    const currentActiveThumb = document.querySelector(`#thumbnails-container> :nth-child(${counter + 1})`);
    console.log("currentActiveT =", currentActiveThumb);

    // dopo il click rimuovo active dall'immagine 
    oldActiveThumb.classList.remove("active");
    // dopo il click rimuovo active dall'immagine default 
    currentActiveThumb.classList.add("active")


    //recupero la slide corrispondente alla posizione dopo il click (+1)
    const currentSliderImg = document.querySelector(`#slider-container> :nth-child(${counter + 1})`);

    // dopo il click rimuovo active dall'immagine 
    oldSliderImg.classList.add("visually-hidden");
    //console.log(oldSliderImg, oldSliderImg.classList);
    // dopo il click rimuovo active dall'immagine default 
    currentSliderImg.classList.remove("visually-hidden");
    //console.log(currentSliderImg, currentSliderImg.classList);
});



//INIZIO FUNZIONE PREV ***************************************
btnPrev.addEventListener("click", function () {
    // recuper le variabili Old prima del counter 
    //recupero la thumbnail corrispondente alla posizione start (al click diventa 1)
    const oldActiveThumb = document.querySelector(`#thumbnails-container> :nth-child(${counter + 1})`);
    console.log("OLD T", oldActiveThumb);

    //recupero la slide corrispondente alla posizione start (al click diventa 1)
    const oldSliderImg = document.querySelector(`#slider-container> :nth-child(${counter + 1})`);

    // a ogni cick incremento il counter di 1. è lo stesso che scrivere counter+=1 
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
    const currentActiveThumb = document.querySelector(`#thumbnails-container> :nth-child(${counter + 1})`);
    //console.log("currentActiveT =", currentActiveThumb);

    // dopo il click rimuovo active dall'immagine 
    oldActiveThumb.classList.remove("active");
    // dopo il click rimuovo active dall'immagine default 
    currentActiveThumb.classList.add("active")


    //recupero la slide corrispondente alla posizione dopo il click (+1)
    const currentSliderImg = document.querySelector(`#slider-container> :nth-child(${counter + 1})`);

    // dopo il click rimuovo active dall'immagine 
    oldSliderImg.classList.add("visually-hidden");
    //console.log(oldSliderImg, oldSliderImg.classList);
    // dopo il click rimuovo active dall'immagine default 
    currentSliderImg.classList.remove("visually-hidden");
    //console.log(currentSliderImg, currentSliderImg.classList);
});


/* ho fatto un tentativo ma devo ribaltare tutto il ragionamento. DEBUG FAIL */