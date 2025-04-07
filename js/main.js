
// const scissors = 'scissors'
// const paper = 'paper'
// const rock = 'rock'
// const consent = confirm('Do you want to play this game?')

// if (consent) {

//     let playerChoice = prompt('Enter rock, paper or scissors')
//     if (playerChoice) {
//         playerChoice = playerChoice.trim().toLowerCase()
//         console.log(playerChoice)
//         if (playerChoice === 'paper' || playerChoice === 'scissors' || playerChoice === 'rock') {
//             let computer = Math.floor((Math.random() * 3)) + 1
//             let computerChoice = computer === 1 ? 'scissors' : computer === 2 ? 'paper' : 'scissors'
//             let result = playerChoice === computerChoice ?
//                 `You: ${playerChoice}\nComputer: ${computerChoice}\nIt is a tie` : playerChoice === rock && computerChoice !== paper ?  `You: ${playerChoice}\nComputer: ${computerChoice}\nPlayer wins`  : playerChoice === scissors && computerChoice !== rock ?
//                 `You: ${playerChoice}\nComputer: ${computerChoice}\nPlayer wins`  : playerChoice === paper && computerChoice !== scissors ?  `You: ${playerChoice}\nComputer: ${computerChoice}\nPlayer wins`  : `You: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins` 

//             let replay = confirm(`${result}\n\nPlay again?`)
//             if (replay) {
//                 window.location.reload()
//             }
//         } else {

//             alert('You entered not the correct option.')
//         }
//     } else {
//         alert('You changed your mind. Maybe another time then')
//     }
// } else {
//     alert('Maybe another time then.')
// }

let number = 0; 

// while (number <= 50) {
//     number++
//     console.log(number)
// }

do {
    console.log(number)
} while (number > 0)