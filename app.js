const colors = ["#ffb997", "#f67e7d", "#843b62", "#0b032d", "#74546a"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 - 3 
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}