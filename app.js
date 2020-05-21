var h3 = document.querySelector('h3');
var c1 = document.querySelector('.color1');
var c2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var btn = document.getElementById('random');

h3.textContent = 'linear-gradient(to right, #543864, #ff6363)';

// Declaring a function to change the background color value
function changeColor() {
    body.style.background =
        'linear-gradient(to right,' +
        c1.value +
        ' , ' +
        c2.value +
        ')';

    h3.textContent = body.style.background + ';';
}
//Applying the colorChange function to c1 to get the first color
c1.addEventListener('input', changeColor);

//Applying the colorChange function to c2 to get the second color
c2.addEventListener('input', changeColor);

// Adding eventListener to the button to create a random gradient
btn.addEventListener('click', function () {

    randomc1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    randomc2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    body.style.background =
        'linear-gradient(to right,' +
        randomc1 +
        ' , ' +
        randomc2 +
        ')';

    h3.textContent = body.style.background + ';'; // Changing h3 to update the color code

    c1.value = randomc1; // Changing the color in input 1
    c2.value = randomc2; // Changing the color in input 2
})