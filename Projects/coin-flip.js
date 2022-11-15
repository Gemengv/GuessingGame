

function flip(guess){
//random generator for result
    let result = Math.floor(Math.random() * 2)+ 1;
//get message paragraph
let message = document.getElementById("message");
//check result
if(result == 1){ //1 equals head
    if(guess == "heads"){
        message.innerHTML = "You guessed heads.<br>The coin flips and comes up heads! Good guess!";

    }
        else{
            message.innerHTML = "You guess tails.<br>The coin flips and comes up heads. You guess wrong, try again.";

    }
}
else {
        if(guess == "tails"){
            message.innerHTML = "You guessed tails.<br>The coin flips and comes up tails! Good guess!";
        
        }
        else{
            message.innerHTML = "You guess heads.<br>The coin flips and comes up tails. You guess wrong, try again.";
        }
    }
}


