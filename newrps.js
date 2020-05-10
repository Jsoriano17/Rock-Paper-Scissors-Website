var rock, paper, scissors, buttonOn, buttonOff;
rock = document.getElementById('rock')
paper = document.getElementById('paper')
scissors = document.getElementById('scissors')
buttonOn = document.querySelector('.reset1')
buttonOff = document.querySelector('.reset2')

buttonOn.addEventListener('mouseover', function () {
    buttonOn.style.display = 'none';
    buttonOff.style.display = 'block'
});

buttonOff.addEventListener('mouseout', function () {
    buttonOff.style.display = 'none';
    buttonOn.style.display = 'block';
})



//rps game
//rock beats scissors, paper beats rock, scissors beats paper


let userScore = 0;
let computerScore = 0; 
const userScore_span = document.getElementById('pScore');
const computerScore_span = document.getElementById('cScore');
const winMessage_div = document.getElementById('win');
const loseMessage_div = document.getElementById('lose');
const drawMessage_div = document.getElementById('draw');
const colon_span = document.getElementById('colon');
const outcomeWin = document.querySelector('.outcome-win');
const outcomeLose = document.querySelector('.outcome-lose');
function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    drawMessage_div.style.display = 'none';
    loseMessage_div.style.display = 'none';
    winMessage_div.style.display = 'flex';
    if(userScore >= 10) {
        drawMessage_div.style.display = 'none';
        loseMessage_div.style.display = 'none';
        winMessage_div.style.display = 'none';
        userScore_span.style.display = 'none';
        computerScore_span.style.display = 'none';
        colon_span.style.display = 'none';
        outcomeWin.style.display = 'inline';
    }
console.log('win');
};

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    winMessage_div.style.display = 'none';
    drawMessage_div.style.display = 'none';
    loseMessage_div.style.display = 'flex';
    if(computerScore >= 10) {
        drawMessage_div.style.display = 'none';
        loseMessage_div.style.display = 'none';
        winMessage_div.style.display = 'none';
        userScore_span.style.display = 'none';
        computerScore_span.style.display = 'none';
        colon_span.style.display = 'none';
        outcomeLose.style.display = 'inline';
    }
    console.log('lose');
};

function draw() {
    drawMessage_div.style.display = 'flex';
    winMessage_div.style.display = 'none';
    loseMessage_div.style.display = 'none';
    console.log('draw');
};


function reset() {
    buttonOff.addEventListener('click', function() {
        computerScore = 0;
        userScore = 0;
    });
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
           win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
          lose();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
    }
};

function main() {

rock.addEventListener('click', function () {
game('r');
})

paper.addEventListener('click', function () {
    game('p');
    })
   
scissors.addEventListener('click', function () {
    game('s');
    })
    
};



main();

buttonOff.addEventListener('click', function() {
    computerScore = 0;
    userScore = 0;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = computerScore;
    drawMessage_div.style.display = 'none';
    loseMessage_div.style.display = 'none';
    winMessage_div.style.display = 'none';
    userScore_span.style.display = 'inline';
    computerScore_span.style.display = 'inline';
    colon_span.style.display = 'inline';
    outcomeWin.style.display = 'none';
    outcomeLose.style.display = 'none';
});

