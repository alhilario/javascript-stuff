// Check if the user is ready to play!
confirm("Are you ready?!!");
age = prompt("What's your age?");

if (age >= 18 ) {
    console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
    console.log("Have Fun!!");
    
    console.log("Batman glares at you.");
    userAnswer = prompt("Are you felling lucky, punk?")
    
    if (userAnswer === "yes") {
        console.log("Batman hits you very hard. It's Batman wins!");
    } else {
        console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
    }
    
    feedback = prompt("What is your feedback?");
    
    if (feedback >=  8) {
       console.log("This is just the beginning of my game empire. Stay tuned for more!"); 
    } else {
        console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
    }
    
} else {
    console.log("Sorry, this is not for you!");
}
