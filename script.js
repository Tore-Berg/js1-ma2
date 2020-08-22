//Assignment, Javascript1, MA2


//Question 1


const button = document.querySelector("#bg");

function changeColor() {
    document.body.style.backgroundColor = "green";
}

button.addEventListener("click", changeColor);


//Another way to accomplish the same thing:

/*button.onclick = function () {
    document.body.style.backgroundColor = "green"; 
};*/


//Question 2 

const secondbutton = document.querySelector(".toggler");
const toggleextra = document.querySelector(".togglee");

secondbutton.onclick = function() {
    toggleextra.classList.toggle("extra");
}
    
//Question 3

const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function() {

    const selectedValue = this.value;

    paragrapsContainer = innerHTML = "";

    for(let i = 1; i <= selectedValue; i++) {
        paragraphsContainer.innerHTML += `<div class="content"><p>New paragraph</p></div>`;
    }
}


//Question 4

const message = document.querySelector(".input");
const characterCount = document.querySelector(".char-count");

message.onkeyup = function() {

    //console.log(event.target.value.length);

    const length = event.target.value.length;

    characterCount.innerHTML = length;

}

//Question 5

const bodyHighlight = document.querySelector("body");

function handleScroll() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if(scrolledY > 35) {
        document.body.classList.add("highlight");
    }

    else{
        document.body.classList.remove("highlight")
        }
    }

window.onscroll = handleScroll;

