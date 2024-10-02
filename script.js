function getcomputerchoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice;
}

function gethumanchoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let btns = document.querySelectorAll('button')
    btns.forEach((btn) => {
        btn.addEventListener('click', ()=> {
            let choice = choices[btn.id]
            PlayRound(choice)
        })
    })
    
}

function PlayRound(humanSelection) {
    
    const computerSelection = getcomputerchoice()
    if (humanSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            computerscore++;
            alert('You lose! Paper beats Rock')
        }
        else if (computerSelection == 'Scissor') {
            humanscore++;
            alert('You win! Rock beats Scissors')
        }
        else {
            alert('draw!')
        }
    }
    if (humanSelection == 'Paper') {
        if (computerSelection == 'Scissor') {
            computerscore++;
            alert('You lose! Scissor beats Paper')
        }
        else if (computerSelection == 'Rock') {
            humanscore++;
            alert('You win! Paper beats Rock')
        }
        else {
            alert('draw!')
        }
    }
    if (humanSelection == 'Scissor') {
        if (computerSelection == 'Rock') {
            computerscore++;
            alert('You lose! Rock beats Scissor')
        }
        else if (computerSelection == 'Paper') {
            humanscore++;
            alert('You win! Scissor beats Paper')
        }
        else {
            alert('draw!')
        }
    }
    scoreboard.textContent = `Human ${humanscore} - Bot ${computerscore}`
    ++rounds;
    if (rounds >= maxrounds) {
        setTimeout(endgame, 500);
    }
}

function endgame() {
    if (humanscore > computerscore) {
        alert('YOU WIN ' + scoreboard.textContent)
    }
    else if ( humanscore < computerscore) {
        alert('YOU LOSE ' + scoreboard.textContent)
    }
    else {
        alert('IT IS A DRAW ' + scoreboard.textContent)
    }
    humanscore = 0;
    computerscore = 0
    rounds = 0
    scoreboard.textContent = `Human ${humanscore} - Bot ${computerscore}`
}


let humanscore = 0;
let computerscore = 0;
let rounds = 0;
let maxrounds = 5;

let scoreboard = document.querySelector('.scoreboard')
scoreboard.textContent = `Human ${humanscore} - Bot ${computerscore}`
gethumanchoice()
