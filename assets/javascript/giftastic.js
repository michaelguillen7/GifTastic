$(document).ready(function() {

    var topics = ["cat", "hamster", "pigeon", "goat", "flamingo", "alligator", "turtle", "dog", "dolphin", "shark"];
    
    function renderButtons() {
    
        $("#animalButtons").empty();
    
        for (i = 0; i < topics.length; i++) {
    
            var x = $("<button>");
    
            x.addClass("singleTopic");
            x.attr("data-name", topics[i]);
            x.text(topics[i]);
    
            $("#animalButtons").append(x);
        };
    };