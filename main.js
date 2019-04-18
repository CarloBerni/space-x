var circles = document.querySelectorAll('.circle');
var popups = document.querySelectorAll('.pop-up');
var right = document.querySelector('.right');
var closes = document.querySelectorAll('.close');

var positions = [0, 700, 800, 1000];
var open = false;

for(let i=0; i < circles.length; i++) {
    let circle = circles[i];
    let popup = popups[i];
    let position = positions[i];
    circle.addEventListener('click', function(){
    if(!open) {
        popup.classList.add('activate');
        right.scrollTo({top: position, behavior: 'smooth'});
        open = true;
    
 } else if (popup.classList.contains('activate') && open) {
     popup.classList.remove('activate');
     open = false;
 } else {
    for(k = 0; k < popups.length; k++) {
        popups[k].classList.remove('activate');
    }
    popup.classList.add('activate');
    right.scrollTo({top: position, behavior: 'smooth'});
 }
})
}

for(let i = 0; i < closes.length; i++) {
    let close = closes[i];
    let popup = popups[i];
    close.addEventListener('click', function(){
        popup.classList.remove('activate');
    })
}