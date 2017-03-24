console.log("connected");

// DECLARING GLOBAL VARIABLES
// Grabbing displays
var correct = document.getElementById("correct");
console.log(correct);

var incorrect = document.getElementById("incorrect");
console.log(incorrect);

var timeRemaining = document.getElementById("timeRemaining");
console.log(timeRemaining);

// THIS IS JUST A VARIABLE
var scoreCounter = 0;

//Questions array
	var q1 = {"question" : "This country is one of the largest wine-producing countries of the world, where wine is grown in every region of the country. Which country is this?",
        "a" : "France",
        "b" : "Italy",
        "c" : "Germany",
        "d" : "Australia",
        "corrrect" : "b"
    },
     q2 = {
        "question" : "What is the name for the type of art portrait that deliberately exaggerates a person?",
        "a"        : "Environmental",
        "b"        : "Cartooning",
        "c"        : "Caricature",
        "d"        : "Tribal",
        "corrrect" : "c"
    },
     q3 = {
        "question" : "Who was the first president of the United States?",
        "a"        : "Abraham Lincoln",
        "b"        : "Ronald Reagan",
        "c"        : "George Washington",
        "d"        : "Barack Obama",
        "corrrect" : "c"
    },
     q4 = {
        "question" : "Who was the first president of the United States?",
        "a"        : "Abraham Lincoln",
        "b"        : "Ronald Reagan",
        "c"        : "George Washington",
        "d"        : "Barack Obama",
        "corrrect" : "c"
    }

// $.getJSON('js/questions1.json').done(function(data){
//         window.questionnaire = data;
//         console.log(window.questionnaire);
//         startGame();
//     });

// DECLARING MAIN CODE
var startGame = function() {
    correct.innerHTML = 0;
    incorrect.innerHTML = 0;
    randomQuestion.innerHTML = randomQuestion;
    console.log(randomQuestion);
}

startGame();

function randomQuestion(){
        var obj_keys = Object.keys(window.questionnaire);
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        window.selectedquestion = window.questionnaire[ran_key];
        document.getElementById("randomQuestion");
}
//start timer
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  //Do code for showing the number of seconds here
}

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML= "Time remaining: " + count + " secs"; // watch for spelling
}

//compare answer
// determine if Mathif match inxwewmwn SCORE AND GOOD JOB
// IF WRONG OR TIMEOUT ADD TO INCORRECT AND NICE TRY, TRY AGAIN
// new game button


//

// Grabbing buttons
var ruby = document.getElementById("ruby");
console.log(ruby);

var sapphire = document.getElementById("sapphire");
console.log(sapphire);

var emerald = document.getElementById("emerald");
console.log(emerald);

var diamond = document.getElementById("diamond");
console.log(diamond);

// DECLARING GLOBAL FUNCTIONS
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// function comparativeFunction(){
// 	if (scoreCounter === parseInt(randomQuestion) { 
// 		console.log("I won");
// 		correct.innerHTML++;
// 		console.log(correct);
// 		reset();
// 	}
// 	else if (scoreCounter > parseInt(randomQuestion) {
// 		console.log("I lost");
// 		incorrect.innerHTML++;
// 		console.log(incorrect);
// 		reset();
// 	}
// }


// function reset() {
//     randomQuestion.innerHTML = (randomQuestion);
//     userScore.innerHTML = 0;
//     scoreCounter = 0;
// }



// // Click event listener
// $(".crystal").on("click", function(){
// 	// console.log(this);
// 	console.log(this.value);
// 	console.log(parseInt(this.value));
// 	scoreCounter = scoreCounter + parseInt(this.value);
// 	comparativeFunction();
// })

