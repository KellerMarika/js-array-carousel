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
let bottom_Btn
let top_Btn

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
    <!---- F1 SVG GROUP----------->
    <svg class="f1 floorplan" width="439" height="430" viewBox="0 0 439 430" fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <path  class="living f1"  d="M436.5 3H172H11L6.5 194L105 196V427H271.5V326.5H405.5V162H436.5V3Z" fill="#D9D9D9"
            fill-opacity="" stroke="" stroke-opacity="" stroke-width="" />

        <path class="bath f1" d="M105.5 196L6.5 194L3 327.5H105.5V196Z" fill="#D9D9D9" fill-opacity="" stroke=""
            stroke-opacity="" stroke-width="" />
    </svg>
</div>`

    , `<div class="svg-container f2">
            <!---- F2 SVG GROUP----------->
            <svg class="f2 floorplan"  width="440" height="429" viewBox="0 0 440 429" fill="none" xmlns="http://www.w3.org/2000/svg">

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
for (i = 0; i < imagesSrc.length; i++) {
    console.log(i);

    //IMG:..........................
    //creo l'immagine
    const img_El = document.createElement("img");

    //aggiungo l'src
    img_El.src = imagesSrc[i]
    //aggiungo l'alt
    img_El.alt = imagesAlt[i]

    //console.log(img_El);

    /* faccio un clone della img_element per poterlo inserire sia nelle thumb che nelle slide */

    img_El
    const img_Elcloned = img_El.cloneNode(true);
    //console.log(img_Elcloned)


    //LABEL THUMB........................

    //creo l'elemento label thumb
    const thumbnailLabel_El = document.createElement("h4");
    //console.log(thumbnailLabel_El);

    //classe nominale e numerata
    let thumbnailLabel_ClassName = `thumbnail-label-${i + 1}`

    //aggiungo alla label thumb la classe nominale numerata
    thumbnailLabel_El.classList.add(thumbnailLabel_ClassName);
    //console.log(thumbnailLabel_El.classList);
    //insetisco nel label la descrizione testuale delle immagini (alt)
    thumbnailLabel_El.innerText = imagesAlt[i]


    //THUMBNAILS:..........................

    //creo l'elemento thumbnail
    const thumbnail_El = document.createElement("div");

    thumbnail_El.dataset.thumbnailEl = i + 1
    //classe nominale e numerata
    let thumbnail_ClassName = "thumbnail-card-" + (i + 1);
    //console.log(thumbnail_ClassName)

    // classe funzionale 
    let active /* = "" */// diventa ="active"solo se è la prima immagine  caricata

    //aggiungo alla thumbnail la classe nominale numerata
    thumbnail_El.classList.add(thumbnail_ClassName);
    //  thumbnail_El.classList.add(active); //_______non posso aggiungere una classe vuota
    //console.log(thumbnail_El.classList)
    //console.log(thumbnail_El)


    //inserisco l'immagine nella thumb
    thumbnail_El.append(img_El)
    //console.log(thumbnail_El)

    //inserisco la label nella thumb
    thumbnail_El.append(thumbnailLabel_El)
    //console.log(thumbnail_El)






    //SLIDERIMGS:..........................

    //creo l'elemento slide
    const slide_El = document.createElement("div");
    //console.log(slide_El);
    //classe nominale e numerata
    let slide_ClassName = "slide-" + (i + 1)

    // classe funzionale 
    let visibility /* = "visually-hidden" */

    //aggiungo alla thumbnail la classe nominale numerata
    slide_El.classList.add(slide_ClassName);
    //console.log(slide_El)

    //inserisco il doppione dell'immagine nella slide
    slide_El.append(img_Elcloned)


    /* aggiungo active al primo thumb */
    if (i === 0) {

        active = "active"

        thumbnail_El.classList.add(active);
        //console.log(thumbnail_El.classList)

        /* aggiungo visibility (hidden) a tutte le slide che non sono al primo posto */
    } else {
        visibility = "visually-hidden"

        slide_El.classList.add(visibility);
        //console.log(slide_El.classList)
    }


    /* i===1 ________________________________________ */
    if (i === 0) {
        //aggiungi svggroup 1
        slide_El.innerHTML += svgGroups[i];//___________[i-1]

        //creo dei bottoni a cui aggiungo un data name e che poi stampo in pagina
        bottom_Btn = createButton("Floorplan", "florplan-bottom");
        console.log(bottom_Btn);
        bottom_Btn.classList.add("PT");
        bottom_Btn.dataset.btnPt = "bottom"
        bottom_Btn.addEventListener("click", switchTopView());

        top_Btn = createButton("Internal Design", "florplan-top");
        console.log(top_Btn);
        top_Btn.classList.add("PT");
    }


    if (i === 2) {
        //aggiungi svggroup 1
        slide_El.innerHTML += svgGroups[i - 1];

        bottom_Btn = createButton("Floorplan", "florplan-bottom");
        console.log(bottom_Btn);
        bottom_Btn.classList.add("P1");
        bottom_Btn.dataset.btnPt = "bottom"
        bottom_Btn.addEventListener("click", switchTopView());

        top_Btn = createButton("Internal Design", "florplan-top");
        console.log(top_Btn);
        top_Btn.classList.add("P1");
        }



       sliderContainer_El.append(top_Btn);
        sliderContainer_El.append(bottom_Btn); 

    console.log(thumbnail_El);
    console.log(slide_El);
    sliderContainer_El.append(slide_El);







    /* 
        i++
        while (i === 2) {
            //aggiungi svg group 2
    
        } */



}







//FUNZIONE CREA BOTTONI:..........................
function createButton(btnText, btnCssSelector) {
    const btn = document.createElement("button");
    //console.log(btn);
    btn.type = "button"
    btn.name = "button"

    btn.classList.add("my-btn");
    btn.classList.add(btnCssSelector);

    const text = document.createElement("div");
    text.innerHTML = btnText;

    btn.append(btnText);

    return btn
}



function switchTopView() {


}








