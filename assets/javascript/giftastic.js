$(document).ready(function () {

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

    $("#addAnimal").on("click", function (event) {
        event.preventDefault();
        var animal = $('#animal-input').val().trim();
        topics.push(animal);
        renderButtons();

    });

    function gifsInfo() {

        var animal = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=AkFwbCSaIKXeFXXJc1BOIfByIy9ai35t&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {

            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var animalDiv = $("<div>");

                var gifP = $("<p>").text("Rating: " + results[i].rating);

                var gifImage = $("<img>");

                gifImage.attr("src", results[i].images.fixed_height_still.url);

                gifImage.attr("data-state", "still");

                gifImage.attr("data-still", results[i].images.fixed_height_still.url);

                gifImage.attr("data-animate", results[i].images.fixed_height.url);

                gifImage.attr("class", "gif");
                animalDiv.append(gifP);
                animalDiv.append(gifImage);
                $("#animals").prepend(animalDiv);

            };


            $(".gif").on("click", function () {

                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            });

            renderButtons();
        });
    };

    $(document).on("click", ".singleTopic", gifsInfo);

    renderButtons();

});