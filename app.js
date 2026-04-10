const questions = [
    { question: "3 + 5", option: ["6", "7", "8", "9"], correct: 3 },
    { question: "10 - 4", option: ["5", "6", "7", "8"], correct: 2 },
    { question: "6 * 2", option: ["10", "12", "14", "16"], correct: 2 },
    { question: "15 / 3", option: ["3", "4", "5", "6"], correct: 3 },
    { question: "9 + 8", option: ["15", "16", "17", "18"], correct: 3 },
    { question: "20 - 7", option: ["11", "12", "13", "14"], correct: 3 },
    { question: "7 * 3", option: ["18", "20", "21", "24"], correct: 3 },
    { question: "16 / 4", option: ["2", "3", "4", "5"], correct: 3 },
    { question: "5 * 5", option: ["20", "25", "30", "35"], correct: 2 },
    { question: "12 + 9", option: ["19", "20", "21", "22"], correct: 3 }
];

let score = 0;
let count = 0;
let selectedOption = 0;

let options = document.querySelectorAll(".option");
let msg = document.querySelector("#msg");
let ques = document.querySelector("#question");
let scoreText = document.querySelector(".score");

let quiz = document.querySelector("#quiz");
let scoreScreen = document.querySelector("#score-screen");
let finalScore = document.querySelector("#final-score");



for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        selectedOption = i + 1;

        
        for (let j = 0; j < options.length; j++) {
            options[j].classList.remove("selected");
        }
        options[i].classList.add("selected");
    });
}


document.querySelector("#submit").addEventListener("click", () => {

    let correctOption = questions[count].correct;

    if (selectedOption === correctOption) {
        msg.innerText = "You are correct!";
        msg.classList.add("correct");
        msg.classList.remove("wrong");
        score++;
    } else {
        msg.innerText = "You are wrong!";
        msg.classList.add("wrong");
        msg.classList.remove("correct");
    }

    scoreText.innerText = "Your Score = " + score;

    selectedOption = 0;
    count++;

    if (count === questions.length) {
        showScore();
    } else {
        loadQuestion();
    }
});


function loadQuestion() {
    let q = questions[count];

    ques.innerText = "Question " + (count + 1) + ": " + q.question;

    for (let i = 0; i < options.length; i++) {
        options[i].innerText = q.option[i];
        options[i].classList.remove("selected");
    }
}


function showScore() {
    quiz.classList.add("hide");
    scoreScreen.classList.remove("hide");
    finalScore.innerText = score + " / " + questions.length;
}

document.querySelector("#restart").addEventListener("click",()=>{
      
    score = 0;
    count = 0;
    selectedOption = 0;

   
    scoreText.innerText = "Your Score = 0";
    msg.innerText = "Select an option";
    msg.classList.remove("correct", "wrong");

   
    scoreScreen.classList.add("hide");
    quiz.classList.remove("hide");

    
    loadQuestion();
})


loadQuestion();