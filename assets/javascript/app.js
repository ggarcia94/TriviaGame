$(document).ready(function() {

//Variables
var questions = [
    {
        text: "What is the Capital of California?",
        answer: "Sacramento",
        options: ["San Francisco", "Sacramento", "Los Angeles"],
    },
    {
        text: "What is the Capital of Washington?",
        answer: "Olympia",
        options: ["Olympia", "Seattle", "Spokane"],
    },
    {
        text: "What is the Capital of Arizona?",
        answer: "Phoenix",
        options: ["Mesa", "Phoenix", "Tucson"],
    },
    {
        text: "What is the Capital of Texas?",
        answer: "Austin",
        options: ["Huston", "Dallas", "Austin"],
    },
    {
        text: "What is the Capital of Rhode Island?",
        answer: "Providence",
        options: ["Warwick", "Pawtucket", "Providence"],
    },
    {
        text: "What is the Capital of New York?",
        answer: "Albany",
        options: ["New York City", "Albany", "Buffalo"],
    },
    {
        text: "What is the Capital of Georgia?",
        answer: "Atlanta",
        options: ["Atlanta", "Savannah", "Athens"],
    },
    {
        text: "What is the Capital of Illinois?",
        answer: "Springfield",
        options: ["Naperville", "Chicago", "Springfield"],
    },
    {
        text: "What is the Capital of Colorado?",
        answer: "Denver",
        options: ["Denver", "Colorado Springs", "Fort Collins"],
    },
    {
        text: "What is the Capital of Maine?",
        answer: "Augusta",
        options: ["Portland", "Augusta", "Kennebunk"],
    }
];
console.log(questions);
var correct = 0;
var incorrect = 0;
var noAnswer = 0;

function questionSetup () {
    correct = 0;
    incorrect = 0;
    noAnswer = 0;
    $("#correct").text("");
    $("#incorrect").text("");
    $("#noAnswer").text("");
    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<br>");
        $("#questions").append('<h3>' + questions[i].text + '<h3>');

        for (var j = 0; j < questions[i].options.length; j++) {
            var a = $("<input/>");
            // Adding a class of movie to our button
            //a.addClass("options");
            //a.addClass("btn btn-primary");
            // Adding a data-attribute
            a.attr("type", "radio");
            a.attr("name", i);
            a.attr("value", questions[i].options[j]);
            a.attr("id", questions[i].options[j]);
            // Adding the button to the buttons-view div
            $("#questions").append(a);
            var b = $("<label>");
            b.attr("for", questions[i].options[j]);
            b.text(questions[i].options[j]);
            $("#questions").append(b);
            $("#questions").append("<br>");
        }
    }
}

questionSetup();

function score() {
    console.log("Correct: " + correct);
    console.log("Incorrect: " + incorrect);
    console.log("Not Answered: " + noAnswer);
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#noAnswer").text("Not Answered: " + noAnswer);
}

$("#button-submit").on("click", function(event) {
    for (var i = 0; i < questions.length; i++) {
        var choice = $('input[name="'+ i +'"]:checked').val();
        if (choice === questions[i].answer){
            correct++;
        } else if (choice === undefined) {
            noAnswer++;
        } else {
            incorrect++;
        }
    }
    score();
});

$("#button-restart").on("click", function(event) { 
    console.log("Restart Clicked")
    questionSetup();

});



});