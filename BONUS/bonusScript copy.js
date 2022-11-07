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

const svgGroups = [


    `<div class="svg-container f1">

    <svg class="living f1" width="439" height="430" viewBox="0 0 439 430" fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <path d="M436.5 3H172H11L6.5 194L105 196V427H271.5V326.5H405.5V162H436.5V3Z" fill="#D9D9D9"
            fill-opacity="" stroke="" stroke-opacity="" stroke-width="" />

        <path class="bath f1" d="M105.5 196L6.5 194L3 327.5H105.5V196Z" fill="#D9D9D9" fill-opacity="" stroke=""
            stroke-opacity="" stroke-width="" />
    </svg>
</div>`

    , `<div class="svg-container f2">
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
        </div>`

]

//LABEL THUMB
// create h4 
//class thumbnail-label senza virgolette


/********************************************
                CLASSI (creo nela wile)
*******************************************/
/* //THUMBNAILS:

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
 */

/********************************************
CREAZIONE THUMB + LABEL && SLIDE + SVG
*******************************************/
//thumb=(div.thumbnail-card.active>img[src][alt]+h4.label.visibility)

//slide=(div.slide.visibility>img[src][alt])__________(dopo solo a 2 devo aggiungere le svg (wile 12))


// contatore 
let counter = 0;

let i = 0

//FINCHE' i risulta < della lunghezza dell'array degli src(5 partendo da 0)
while (i < imagesSrc.length) {
    console.log(i);

    //IMG:..........................
    //creo l'immagine
    const img_El = document.createElement("img");

    //aggiungo l'src
    img_El.src = imagesSrc[i]
    //aggiungo l'alt
    img_El.alt = imagesAlt[i]

    console.log(img_El);

    //THUMBNAILS:..........................

    const thumbnail_El = document.createElement("div");

    //classe nominale e numerata
    let thumbnail_ClassName = "thumbnail-card " + (i + 1)

    // classe funzionale 
    let active = " "








    //LABEL THUMB........................

    //classe nominale e numerata
    let thumbnailLabel_ClassName = "thumbnail-label" + (i + 1)

    const thumbnailLabel_El = document.createElement("h4");
    console.log(thumbnailLabel_El);

    //SLIDERIMGS:..........................

    //classe nominale e numerata
    let slide_ClassName = "slide" + (i + 1)

    // classe funzionale 
    let visibility = "visually-hidden"

    const slide_El = document.createElement("div");
    console.log(slide_El);



    /*   while (i === 0) {
  
          active = "active"
          visibility = ""
      } */

    /* 
        while (i === 1) {
            //aggiungi svggroup 1
    
        }
    
        i++
        while (i === 2) {
            //aggiungi svg group 2
    
        } */

    i++

}

















