

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//variables//
const leftbtn = document.querySelector (".arrow_left");	
const rightbtn = document.querySelector (".arrow_right");
const dots = document.querySelector (".dots");
const img = document.querySelector (".banner-img");
let index = 0;



//intégration des dots//
function affichagedots () {
	for (let i = 0; i<slides.length; i++) {
		const dot = document.createElement("div")
		//console.log (dot)
		dots.appendChild(dot)
		dot.classList.add("dot")
		if (i == index) {
		dot.classList.add("dot_selected")
		}
	}
}
affichagedots()



//gestion caroussel, dots et texte//
function imageprecedente () {
	leftbtn.addEventListener("click",function() {
	const tabdots = document.querySelectorAll(".dots .dot");
	tabdots[index].classList.remove("dot_selected");
	index--;

	if (index<0){
	index = slides.length-1; 
	}

	let tagLine = slides[index].tagLine;
	img.src = slides[index].image;
	tabdots[index].classList.add("dot_selected");
	//console.log(tagLine);
	document.querySelector ("p").innerHTML=tagLine;
	//console.log(banner.txt);

	})
}
imageprecedente(); 

function imagesuivante () {
	rightbtn.addEventListener("click",function () {
	const tabdots = document.querySelectorAll(".dots .dot");
	tabdots[index].classList.remove("dot_selected");
	index++;
	//console.log (index);	
	
	if (index>slides.length -1) {
	index = 0;
	}
	let tagLine = slides[index].tagLine;
	document.querySelector ('p').innerHTML=tagLine;
	img.src = slides[index].image;
	tabdots[index].classList.add("dot_selected");
	})
}
imagesuivante();