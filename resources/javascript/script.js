var topic = ["cats", "dogs", "rats"];

var image_urls = [];
var still_image_urls = [];
var ratings = [];

// function to take list and populate buttonbar
var populate = function () {
    console.log("populating!")
    $("#buttonbar").empty();
    for (var i = 0; i < topic.length; i++) {
        var b = $('<button>', { class: 'btn buttonlist', type: "button", value: topic[i] });
        b.text(topic[i]);
        $("#buttonbar").append(b);
    }

}

populate();

$("#add").click(function () {
    topic_txt = $("#textin").val()
    topic.push(topic_txt);
    var b = $('<button>', { class: 'btn buttonlist', type: "button", value: topic_txt});
        b.text(topic_txt);
        $("#buttonbar").append(b);
    }
);

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
$(".buttonlist").click(function () {
    texty = $(this).val();
    // q
    // limit
    // rating
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + texty + '&api_key=wbYtTVFYLMsFE4zejhFlWXYHNanZOZDu&limit=10';
    // Part 2 - Use AJAX to call GIPHY API (note that the .done() function waits for the API to respond)
    $.ajax({ url: queryURL, method: 'GET' }).done(function (response) {

        // This is the API response data. It's a JSON object of 25 gifs
        console.log(response.data);

        // For simplicity, we will take the first gif (ie. at postion 0)
        image_urls = [];
        still_image_urls = [];
        ratings = [];

        for (var i = 0; i < response.data.length; i++) {

            var giphyURL = response.data[i].images.fixed_height.url;
            var stillGiphyURL = response.data[i].images.fixed_height_still.url;
            var rating = response.data[i].rating;

            image_urls.push(giphyURL);
            still_image_urls.push(stillGiphyURL);
            ratings.push(rating);
            $("#images").empty();

        }
        for (var j = 0; j < 10; j++) {
            var new_gif = $('<img class="image">')
            new_gif.attr('src', still_image_urls[j]);
            new_gif.attr('alt', image_urls[j]);
            new_gif.text(ratings[j]);

            new_gif.click(function () {
                console.log("click!");
                alt = $(this).attr('alt');
                src = $(this).attr('src');
                $(this).attr('alt', src);
                $(this).attr('src', alt);
            });
            $("#images").append(new_gif);
        }
    });
});


// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.