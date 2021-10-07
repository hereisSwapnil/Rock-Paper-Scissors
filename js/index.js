const handOption = {
    "rock":"assets/rock.png",
    "paper":"assets/paper.png",
    "scissors":"assets/scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    // console.log(hand);
    
    // hides the hands div from the view
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show next page means the contest page with result and play again option
    let result = document.querySelector(".result");
    result.style.display = "flex";

    // let userImage = document.getElementById("userimage");
    document.getElementById("userimage").src = handOption[hand];
    console.log(hand);
    resultTell(hand,pickComputerHand());

}

const pickComputerHand = () => {
    let hands = ["rock" , "paper" , "scissors"];
    let handChosenComp =Math.floor(Math.random()*3);
    document.getElementById("computerimage").src = handOption[hands[handChosenComp]];
    console.log(handChosenComp);
    return hands[handChosenComp];
}

const resultTell = (userHand,cpHand) => {
    if(userHand=="rock" && cpHand=="paper"){
        setDecision("YOU LOSE");
    }
    else if(userHand=="rock" && cpHand=="scissors"){
        setDecision("YOU WON");
        setScore(SCORE+1);
    }
    else if(userHand=="paper" && cpHand=="rock"){
        setDecision("YOU WON");
        setScore(SCORE+1);
    }
    else if(userHand=="paper" && cpHand=="scissors"){
        setDecision("YOU LOSE");
    }
    else if(userHand=="scissors" && cpHand=="rock"){
        setDecision("YOU LOSE");
    }
    else if(userHand=="scissors" && cpHand=="paper"){
        setDecision("YOU WON");
        setScore(SCORE+1);
    }
    else if(userHand==cpHand){
        setDecision("IT'S A TIE");
    }
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

const playAgain = () => {
    // hides the hands div from the view
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    // show next page means the contest page with result and play again option
    let result = document.querySelector(".result");
    result.style.display = "none";
}