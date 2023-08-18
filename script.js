

const questions = [
        "Which country is known as the 'Land of the Rising Sun'?",
        "Which European country is famous for its canals, historic architecture, and windmills?",
        "In which country is the Great Pyramid of Giza located?",
        "Which sport is often referred to as The Beautiful Game?",
        "What is the highest score one can achieve in a single turn of a standard game of bowling?",
        "In which sport would you perform an ollie, kickflip, or heelflip?",
        "Who played the lead role of Tony Stark (Iron Man) in the Marvel Cinematic Universe?",
        "Which singer is often referred to as the 'Queen of Pop' and has hits like 'Like a Virgin' and 'Vogue'?",
        "Who is the British actor famous for portraying James Bond in several films?",
    ];


const answers = [
        "Japan",
        "Netherlands",
        "Egypt",
        "Soccer",
        "300",
        "Skateboarding",
        "Robert Downey Jr.",
        "Madonna",
        "Sean Connery",
    ];



let cards = document.querySelectorAll(".card");
let newScore = document.querySelector(".score span")

 let score= 0;

cards.forEach((card, index) => {
    card.addEventListener('click', function () {
        getTheQuestion(index);
    });
    });

    function getTheQuestion (index) {
        let cardValue = parseInt(cards[index].getAttribute("data-value"));
        let userAnswer = prompt(questions[index])
        if (userAnswer === answers[index]){
            alert("Correct!")
            // score += parseInt(cards.querySelectorAll('data-value'))
            // newScore.innerHTML = score
            score += cardValue;
            updateScore();




        }else {
            alert("Wrong. The correct answer is: " + answers[index]);
        }
        }
        function updateScore() {
           newScore.textContent = score;
        }
        


let reset = document.querySelector(".button")
reset.addEventListener('click', function() {
    score = 0;
    updateScore();
    })



