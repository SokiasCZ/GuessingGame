document.getElementById('guessButton').addEventListener('click', clickFunction);
const redAns = Math.floor(Math.random() * 256);
const greenAns = Math.floor(Math.random() * 256);
const blueAns = Math.floor(Math.random() * 256);

console.log(redAns, greenAns, blueAns);


const backgroundColor = 'rgb('+redAns+', '+greenAns+', '+blueAns+')';
document.getElementById('mainSquare').style.background = backgroundColor;

function clickFunction() {
    const redInp = document.getElementById('red');
    const greenInp = document.getElementById('green');
    const blueInp = document.getElementById('blue');
    let red = redInp.value;
    let green = greenInp.value;
    let blue = blueInp.value;
    if (!red > 0) { red = 0; } else if (red > 255) { red = 255; }
    if (!green > 0) { green = 0; } else if (green > 255) { green = 255; }
    if (!blue > 0) { blue = 0; } else if (blue > 255) { blue = 255; }


    let attemptNum = document.getElementById('currAttempt').innerHTML;
    attemptNum++;
    document.getElementById('currAttempt').innerHTML = attemptNum;



    const redByUser = document.getElementById('Red'+attemptNum);
    const greenByUser = document.getElementById('Green'+attemptNum);
    const blueByUser = document.getElementById('Blue'+attemptNum);
    const rowSquare = document.getElementById('rowSquare'+attemptNum);

    let redSign = '⬇️';
    if (red < redAns) { redSign = '⬆️'; } else if (red == redAns) { redSign = '✅'; }
    let greenSign = '⬇️';
    if (green < greenAns) { greenSign = '⬆️'; } else if (green == greenAns) { greenSign = '✅'; }
    let blueSign = '⬇️';
    if (blue < blueAns) { blueSign = '⬆️'; } else if (blue == blueAns) { blueSign = '✅'; }

    redByUser.innerHTML = 'R: '+red+' '+redSign;
    greenByUser.innerHTML = 'G: '+green+' '+greenSign;
    blueByUser.innerHTML = 'B: '+blue+' '+blueSign;
    rowSquare.style.background = 'rgb('+red+', '+green+', '+blue+')';


    document.getElementById('row'+attemptNum).hidden = false;
    if (red == redAns && green == greenAns && blue == blueAns) {
        //won game
        document.getElementById('guessButton').disabled = true;
        document.getElementById('wintable').hidden = false;
        return;
    }

    if (attemptNum > 7) {
        //lost game
        document.getElementById('guessButton').disabled = true;
        const winAnn = document.getElementById('winrow')
        winAnn.innerHTML = "❌You lose!❌\<br>Correct answer was: R - "+redAns+", G - "+greenAns+", B - "+blueAns;
        document.getElementById('wintable').hidden = false;
        return;
    }
    

    redInp.value = 0;
    greenInp.value = 0;
    blueInp.value = 0;
    
}