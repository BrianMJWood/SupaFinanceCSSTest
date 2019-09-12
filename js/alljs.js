$('input[type="range"]').rangeslider({
    polyfill: false,
});

$(document).ready(function () {
    var output = $('.range-slider-output span');
    var range = $('.range-slider input[type="range"]');

    output.text(parseFloat(range.val()).toFixed(2));

    // function adjusStep ()

    if (+range.val() > 5 && +range.attr("step") === 3) {
        range.attr("step", "5");
        range.attr("min", "5");
        range.rangeslider('update', true);
    } else if (+range.val() === 5 && +range.attr("step") === 5) {
        range.attr("step", "3");
        range.attr("min", "2");
        range.rangeslider('update', true);
    }

    range.on('input', function () {
        output.text(parseFloat(range.val()).toFixed(2));
        console.log("Current step: " + +range.attr("step"));
        console.log("Current value: " + +range.val());

        if (+range.val() > 5 && +range.attr("step") === 3) {
            range.attr("step", "5");
            range.attr("min", "5");
            range.rangeslider('update', true);
        } else if (+range.val() <= 5 && +range.attr("step") === 5) {
            range.attr("step", "3");
            range.attr("min", "2");
            range.rangeslider('update', true);
        }
    });
});