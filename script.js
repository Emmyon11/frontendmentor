function setImage(phoneScreen){
    let image1 = document.querySelector('.illustration');
    if (phoneScreen.matches ){
            image1.setAttribute("src", "images/illustration-sign-up-mobile.svg");
    }
    else{
        image1.setAttribute("src", "images/illustration-sign-up-desktop.svg")
    }
}
var phoneScreen = window.matchMedia("(max-width: 700px)");
var x = setImage(phoneScreen);
phoneScreen.addEventListener("resize", x );