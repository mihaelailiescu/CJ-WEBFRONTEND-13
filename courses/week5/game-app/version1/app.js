console.log('Start game')

var GamePosibility = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}
var possibilities = [GamePosibility.rock, GamePosibility.paper, GamePosibility.scissors];

var userIndex = Math.floor(Math.random() * possibilities.length);
var computerIndex = Math.floor(Math.random() * possibilities.length);

userChoice = possibilities[userIndex];
computerChoise = possibilities[computerIndex]


console.log('Computer choice:', computerChoise);
console.log('User choice:', userChoice);


if (userChoice === computerChoise) {
    console.log('Its a draw')
} else {
    switch (userChoice) {
        case GamePosibility.rock:
            if (computerChoise === GamePosibility.scissors) {
                // rock wins
                console.log("User wins!");
            } else {
                // paper wins
                console.log("Computer wins!");
            }
            break;
        case GamePosibility.paper:
            if (computerChoise === GamePosibility.rock) {
                // paper wins
                console.log("User wins!");
            } else {
                // scissors wins
                console.log("Computer wins!");
            }
            break;
        case GamePosibility.scissors:
            if (computerChoise === GamePosibility.rock) {
                // rock wins
                console.log("Computer wins!");
            } else {
                // scissors wins
                console.log("User wins!");
            }
            break;
    }
}
