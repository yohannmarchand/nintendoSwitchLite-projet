



/* -------------------------------------------------------------------------- */
/*                                 Menu burger                                */
/* -------------------------------------------------------------------------- */

var barsElement = document.getElementsByClassName("navigation__triger"),
    navElement = document.getElementsByClassName("navigation__box");


barsElement.addEventListener("click" ,() => {
    
    console.log('toto');
    navElement.toggle("navigation__box--activ");


})