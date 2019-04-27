//here you'll write all of your JavaScript and jQuery

// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.

var correct = 0;
var incorrect = 0;


function fancyTimeFormat(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
var counter = 1000;
var timer = null;

function tictac() {
    counter--;
    $("#clock").html("Time Remaining: " + fancyTimeFormat(counter));
    if (counter == 0) {
        stopInterval();
        $("#clock").html("GAME OVER!")

    }
}

function reset() {
    clearInterval(timer);
    counter = 0;
}
function startInterval() {
    timer = setInterval("tictac()", 1000);
}
function stopInterval() {
    clearInterval(timer);
}

$(document).ready(function () {
    startInterval();
});

function update_score(){
    $("#correct").text("Correct: "+ correct);
    $("#incorrect").text("Incorrect: "+incorrect);
}

$("#q1_submit").click(function () {

    console.log("clicked");
    if (a = $('input[name=q1_answer]:checked').val() == "yes") {
        $("#q1_response").text("That's not even possible. You're clearly lying. Weird flex bro.");
        incorrect += 1;
    } else if (a = $('input[name=q1_answer]:checked').val() == "no") {
        $("#q1_response").text("Of course not, right? That's crazy.");
        correct += 1;
    }
    $("#q1_submit").hide();
    update_score();

});

$("#q2_submit").click(function () {

    console.log("clicked");
    if (a = $('input[name=q2_answer]:checked').val() == "chaps") {
        $("#q2_response").text("Okay cowboy");
        incorrect += 1;
    } else if (a = $('input[name=q2_answer]:checked').val() == "inappropriate") {
        $("#q2_response").text("That's correct. This is a questioneer about ayeyes not your crazy roommate from college. Let's keep this professional.");
        correct += 1;
    }
    $("#q2_submit").hide();
    update_score();

});

$("#q3_submit").click(function () {

    console.log("clicked");
    if (a = $('input[name=q3_answer]:checked').val() == "real") {
        $("#q3_response").text("Sarcasm is not appreciated in this survey.");
        incorrect += 1;
    } else if (a = $('input[name=q3_answer]:checked').val() == "facts") {
        $("#q3_response").text("It's actually what the scientist yelled when he first saw it.");
        incorrect += 1;
    }else if (a = $('input[name=q3_answer]:checked').val() == "garbage") {
        $("#q3_response").text("That's right. It is in fact garbage. Well played homeslice. You know what's up.");
        correct += 1;
    }
    $("#q3_submit").hide();
    update_score();

});