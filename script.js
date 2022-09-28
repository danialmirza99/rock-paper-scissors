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
}

