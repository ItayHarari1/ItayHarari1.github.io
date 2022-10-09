const factsArray = ["I subsist on coffee",
"I lift weights everyday", "I like swimming",
"I live in Ramat-Hasharon", "I enjoy playing music",
"I enjoy listening to variety of music","I talk a little bit Arabic",
"I'm into philosophy", "My favorite football team in FCB",
 "This is the sign you've been waiting for", "I cook a lot", "Python is named after 'Monthy Python'(duh?)"];
 const d = new Date();

function factPop() {  // pops a random fact after button click
    const ind = Math.floor(Math.random() * factsArray.length);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const factTextElement = document.getElementById("factText");
    factTextElement.innerHTML = factsArray[ind];
    factTextElement.style.visibility = "visible";
    factTextElement.style.color = '#' + randomColor;
}
function ageCalc(){ // returns my current age
    document.getElementById("age").innerHTML = d.getFullYear()-1998;
}
function semestersLeft(){  //returns string counting how much semesters I have left
    const fullYear = d.getFullYear();
    const month = d.getMonth();
    var retString = "Bs.c in electrical and electronic engineering from Tel Aviv University";
    if (((fullYear == 2025) && (d.getMonth() >= 7)) || (fullYear > 2025))
    {
        document.getElementById("studiesStatus").innerHTML = retString;
        return;
    }
    var sem = 0;
    if ((fullYear == 2022) || ((fullYear == 2023) && (month < 3))){
        sem = 6;
    }
    if ((fullYear == 2023) && ((month > 2 ) && (month < 10))){
        sem = 5;
    }
    if ((fullYear == 2023) && (month > 9)){
        sem = 4;
    }
    if ((fullYear == 2024) && ((month > 2 ) && (month < 10))){
        sem = 3;
    }
    if ((fullYear == 2024) && (month > 9)){
        sem = 2;
    }
    if ((fullYear == 2025) && ((month > 2 ) && (month < 10))){
        sem = 1;
    }
    document.getElementById("studiesStatus").innerHTML = "Student at Tel Aviv University for electrical and electronic engineering with " + sem + " semesters left";
}
    funcOnLoad = () => //to be depreceted
    {
        semestersLeft();
        ageCalc();
    }
jumpTop = () =>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function expFunc(idNum){
    var panel = document.getElementById(idNum);
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
    panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
}

function expFuncDep(){ // deprecated
var i;
var expArr = document.getElementsByClassName("expTitle");
for (i=0 ; i < expArr.length; i++){
    expArr[i].addEventListener("click",function(){
        this.classList.toggle("expActive");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })}

}



function expFuncOne(){
    var i;
    console.log('here')
    Array.from(document.getElementsByClassName('expTitleIT')).forEach(elem => {
        if (! elem.style.experience.style[':hover'].opacity) {
            elem.style.experience.style[':hover'].opacity = 0.9
        }
        else {
            elem.style.experience.style[':hover'].opacity = 'none'
        }
        // if (panel.style.display === "block") {

        //     panel.style.display = "none";
        //     console.log('here3')

        //   } else {
        //     panel.style.display = "block";
        //     console.log('here4')
        //   }
        // if (panel.style.maxHeight) {
        //     panel.style.maxHeight = "none";
        //   } else {
        //     panel.style.maxHeight = panel.scrollHeight + "px";
        //   }
    })
    
          
            }
    
    