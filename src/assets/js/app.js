



/* -------------------------------------------------------------------------- */
/*                                 Menu burger                                */
/* -------------------------------------------------------------------------- */

var barsElement = document.getElementsByClassName("navigation__triger"),
    navElement = document.getElementsByClassName("navigation__box");

barsElement[0].addEventListener("click" ,() => {
    
    navElement[0].classList.toggle("navigation__box--activ");

    if (barsElement[0].classList[1] == "fa-bars") {
        barsElement[0].classList.replace("fa-bars","fa-times");
    }
    else{
        barsElement[0].classList.replace("fa-times","fa-bars");
    }

    
})