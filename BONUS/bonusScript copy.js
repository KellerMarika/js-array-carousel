/********************************************
            DOM    ELEMENT
*******************************************/

// SLIDER CONTAINER 
const sliderContainer_El = document.getElementById("slider-container");
//console.log(sliderContainer_El);

// THUMBNAILS CONTAINER 
const thumbnailsContainer_El = document.querySelector("#thumbnails-container");
//console.log(thumbnailsContainer_El);

//********** BOTTONI *******************/

// btn prev 
const btnPrev = document.querySelector(".btn-preview");
//console.log(btnPrev);

// btn next 
const btnNext = document.querySelector(".btn-next");
//console.log(btnNext);

// btn top view 
const btnTop = document.querySelector(".florplan-top");
//console.log(btnPrev);

// btn floor plan 
const btnBottom = document.querySelector(".florplan-bottom");
//console.log(btnNext);


/********************************************
                ARRAY
*******************************************/

//src immagini
const imagesSrc = ["img/img1.png"
    , "/BONUS/img/f1/1-wall.png"
    , "/BONUS/img/f2/2-wall.png"
    , "img/img2.png"
    , "img/img3.png"
]

//alt immagini
const imagesAlt = ["panoramica"
    , "top-view arredo PT"
    , "top-view arredo 1P"
    , "living"
    , "pergolato"
]


//LABEL THUMB
// create h4 
//class thumbnail-label senza virgolette


/********************************************
                CLASSI
*******************************************/
//THUMBNAILS:

//classe nominale e numerata
let thumbnail_El //= "thumbnail-card " + (i + 1)

// classe funzionale 
let active // "active" || " "


//SLIDERIMGS:

//classe nominale e numerata
let slide_El  //= "slider-img" + (i + 1)

// classe funzionale 
let visibility //= "visually-hidden"  || " "


//LABEL THUMB

//classe nominale e numerata
let thumbnailLabel_El  //= "thumbnail-label" + (i + 1)

// classe funzionale 
//let visibility= "visually-hidden"  || " "_____________________



// contatore 
let counter = 0;

let i = 0

//FINCHE' i risulta < della lunghezza dell'array degli src(5 partendo da 0)
while (i < imagesSrc.length) {



    while (i === 0) {

        active = "active"
    }

}

















