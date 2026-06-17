const secret = 7;
let guess = 5;

if (guess === secret) {
    console.log("You guessed correctly!");
} else if (guess < secret) {
    console.log("Too low");
} else {
    console.log("Too high");
}