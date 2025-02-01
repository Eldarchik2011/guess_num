
//get a random number
//function getRandomint(min, max) {
//return Math.floor(Math.random() * (max - min + 1)) + min;
//}


// get a random number
//math.floor - округлить до целого в меньшую сторону
// math.random() * (max - min + 1) + MIN

let myinput = document.querySelector('#myinput')
let mybtn = document.querySelector('#checkbtn')
let mycont = document.querySelector('#container')
let congrat = document.querySelector('#congrat')
let attempts = document.querySelector('#attempts')
function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randnum = randomnum(1, 20);
console.log(randnum);
let i = 1;
mybtn.addEventListener('click', () => {

    if (randnum == myinput.value) {
        congrat.textContent = 'YOU ARE RIGHT'
        attempts.textContent = `${i} попытки`;
    } else {
        congrat.textContent = 'TRY AGAIN'
        i++
        console.log(i)
    }
})