$(function () {
    peopleCounter();
    // let range = $('#range'),
    //     profit = $('#profit'),
    //     profitMain = $('.section-4__profit'),
    //     inv = $('.inv');
    // range.on('input change', function () {
    //     tmp_range_val = Math.floor($(this).val() * 1.32);
    //     profit.text(tmp_range_val);
    //     inv.text($(this).val());
    //     if (tmp_range_val > 999999) {
    //         profitMain.css({ color: 'red' });
    //     } else {
    //         profitMain.css({ color: '#000' });
    //     }
    // });
});
function peopleCounter() {
    let peopleOnPage = $('.peopleOnPage'),
        freePlaces = $('.freePlaces'),
        num = 110,
        free = 14;
    setInterval(function () {
        peopleOnPage.children('.c').text(num++);
    }, 12000);
    let freeTime = setInterval(function () {
        freePlaces.children('.c').text(free--);
        if (free < 3) {
            clearInterval(freeTime);
        }
    }, 50000);
}
