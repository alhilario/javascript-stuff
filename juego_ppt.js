var userChoice = prompt("Eliges piedra, papel o tijera?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
computerChoice = "piedra";
} else if(computerChoice <= 0.67) {
computerChoice = "papel";
} else {
computerChoice = "tijera";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "Empate, vuelve a intentarlo";
    };
    
    if (choice1 === "piedra") {
        if (choice2 === "tijera") {
            return "piedra gana";
        } else {
            return "papel gana";
        };
    };
    
    if (choice2 === "piedra") {
        if (choice1 === "tijera") {
            return "piedra gana";
        } else {
            return "papel gana";
        };
    };
    
    if (choice1 === "tijera") {
        if (choice2 === "piedra") {
            return "piedra gana";
        } else {
            return "tijera gana";
        };
    };
    
    if (choice2 === "tijera") {
        if (choice1 === "piedra") {
            return "piedra gana";
        } else {
            return "tijera gana";
        };
    };
};

console.log(compare(userChoice, computerChoice));
