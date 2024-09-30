function getcomputerchoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice;
}

function gethumanchoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let x = 1;
    let choice;
    while(x) {
        choice = prompt('choose between 0-Rock, 1-Paper, 2-Scissor')
        if (choice >= 0 && choice < choices.length) {
            x = 0;
        }
    }
    return choices[choice]
}

function PlayRound() {
    const humanSelection = gethumanchoice()
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
}

function PlayGame() {
    for(let i = 0; i < 5; ++i) {
        PlayRound()
        console.log(`human ${humanscore} - computer ${computerscore}`)
    }
    if (humanscore > computerscore) {
        alert('YOU WIN')
    }
    else if ( humanscore < computerscore) {
        alert('YOU LOSE')
    }
    else {
        alert('IT IS A DRAW')
    }
}


let humanscore = 0;
let computerscore = 0;

