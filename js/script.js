console.log("switch lang to en");

function playSound(e) {

    console.log(e.key);
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    let key = document.querySelector(`.key[data-key="${e.key}"]`);
    audio.currentTime = 0.01;
    audio.play();
    key.classList.add('playing');



}
let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {

    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    setTimeout(() => { this.classList.remove('playing'); }, 5500);

}
document.addEventListener('keydown', playSound);