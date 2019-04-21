var wins = 0;
var losses = 0;

target_score = 0;
crystal_values = [0, 0, 0, 0];
total_score = 0;

initialize = function () {
    target_score = ~~(Math.random() * 102 + 19);
    for (var i = 0; i < 4; i++) {
        crystal_values[i] = ~~(Math.random() * 12 + 1);
    }
    total_score = 0;
}

victory = function () {
    wins++;
    initialize();
}

loss = function () {
    losses++;
    initialize();
}

game_logic = function () {
    if (total_score > target_score) {
        loss();
    }
    else if (total_score == target_score) {
        victory();
    }
    update_display();
}

update_display = function () {
$("#winrow").text("Wins: "+wins);
$("#lossrow").text("Losses: "+losses);
$("#total_score_title").text(total_score);
$("#target_score").text(target_score);
}

$("#img1_row").click(function () {
    total_score += crystal_values[0];
    game_logic();
});

$("#img2_row").click(function () {
    total_score += crystal_values[1];
    game_logic();

});

$("#img3_row").click(function () {
    total_score += crystal_values[2];
    game_logic();
});

$("#img4_row").click(function () {
    total_score += crystal_values[3];
    game_logic();
});