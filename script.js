var play = ['r', 'p', 's'];

function userInput(){
    var userInput = document.getElementById("user-input").value;
    if(userInput == "r"){
        alert("You chose Rock");
    }
    else if(userInput == "p"){
        alert("You chose Paper");
    }

    else if(userInput == "s"){
        alert("You chose Scissors");
    }
    else{
        alert("You chose an invalid input. Remember to type r, p, or s. They should all be lowercase");
    } 
    
    cpuInput();

    while (userInput === play[0] && cpuInput === play[0]); {
        alert("its a tie!");
        return;
    } 
   
    
}

function cpuInput() {
    var cpuChoice = play[Math.floor(Math.random() * play.length)]; {
        alert("the PC chose " + cpuChoice);
    }
}


