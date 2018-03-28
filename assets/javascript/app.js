var questions = [
    {
        text: "What is the Capital of California?",
        answer: "Sacramento",
        options: ["San Francisco", "Sacramento", "Los Angeles"],
    },
    {
        text: "What is the Capital of Washington?",
        answer: "Olympia",
        options: ["Olympia", "Seattle", "Pullman"],
    }
];
console.log(questions);

for (var i = 0; i < questions.length; i++) {
    $("#questions").append('<div id="text">' + questions[i].text + '</div>');

    for (var j = 0; j < questions[i].options.length; j++) {
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("options");
        a.addClass("btn btn-primary");
        // Adding a data-attribute
        a.attr("data-name", questions[i].options[j]);
        // Providing the initial button text
        a.text(questions[i].options[j]);
        // Adding the button to the buttons-view div
        $("#questions").append(a);
    }
}
