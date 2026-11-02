let words = ["stop", "go", "toady", "impotent"];

function newGame(){
    let randomIndex = parseInt(Math.random() * words.length);
    let word = words[randomIndex];
    let clueString = "";
    for (let i = 0; i < word.length; i++){
        clueString+="_ ";
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}

function guess(){
    
}