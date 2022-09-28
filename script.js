var play = ["r", "s", "p"];
var cpuAnswer;
function userInput(){
    var input = document.getElementById("user-input").value;
    if(input == "r"){
        alert("You chose Rock");
    }
    else if(input == "p"){
        alert("You chose Paper");
    }

    else if(input == "s"){
        alert("You chose Scissors");
    }
    else{
        alert("You chose an invalid input. Remember to type r, p, or s. They should all be lowercase");
    }

    cpuInput();

    if((input == "s" && cpuAnswer == "s") || (input == "p" && cpuAnswer == "p") || (input == "r" && cpuAnswer == "r")){
        alert("tie");
    }
    else if ((input == "s" && cpuAnswer == "p") || (input == "p" && cpuAnswer == "r") || (input == "r" && cpuAnswer == "s")){
        alert("you win");
    }
    else if ((input == "s" && cpuAnswer == "r") || (input == "p" && cpuAnswer == "s") || (input == "r" && cpuAnswer == "p")){
        alert("you lose");
    }
    else{
        alert("try again!")
    }
}

function cpuInput(){
    var cpuChoice = play[Math.floor(Math.random() * play.length)];
    cpuAnswer = cpuChoice;
    if(cpuAnswer == "s"){
        alert("The cpu has chosen Scissors");
    }
    else if(cpuAnswer == "r"){
        alert("The cpu has chosen Rock");
    }
    else if(cpuAnswer == "p"){
        alert("The cpu has chosen Paper");
    }
}


