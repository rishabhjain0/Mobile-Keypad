var clicks = 0;
var timer, timeout = 400; // time between each click

var clicksCount = function(charToBeAdded){
    let data = $("#op").text();
    data += charToBeAdded;
    $("#op").text(data);
}


const handleclicks = ()=>{
    $("#star").click(()=>{
        clicksCount("*");
    })
    $("#0").click(() => {
        clicksCount("0");
    })
    $("#hash").click(() => {
        clicksCount("#");
    })
    $("#clear").click(() => {
        $("#op").text("");
    })

    $(".buttonStyle").unbind().click(function(e){
        clearTimeout(timer);
        clicks++;
        var evt = e;
        let id = this.id;
        timer = setTimeout(function () {
            switch (id) {
                case "1":
                    if (clicks == 1) clicksCount(".");
                    if (clicks == 2) clicksCount(",");
                    if (clicks == 3) clicksCount("!");

                    break;
                case "2":
                    if (clicks == 1) clicksCount("a");
                    if (clicks == 2) clicksCount("b");
                    if (clicks == 3) clicksCount("c");

                    break;
                case "3":
                    if (clicks == 1) clicksCount("d");
                    if (clicks == 2) clicksCount("e");
                    if (clicks == 3) clicksCount("f");
                    break;
                case "4":
                    if (clicks == 1) clicksCount("g");
                    if (clicks == 2) clicksCount("h");
                    if (clicks == 3) clicksCount("i");
                    break;
                case "5":
                    if (clicks == 1) clicksCount("j");
                    if (clicks == 2) clicksCount("k");
                    if (clicks == 3) clicksCount("l");
                    break;
                case "6":
                    if (clicks == 1) clicksCount("m");
                    if (clicks == 2) clicksCount("n");
                    if (clicks == 3) clicksCount("o");
                    break;
                case "7":
                    if (clicks == 1) clicksCount("p");
                    if (clicks == 2) clicksCount("q");
                    if (clicks == 3) clicksCount("r");
                    if (clicks == 4) clicksCount("s");
                    break;
                case "8":
                    if (clicks == 1) clicksCount("t");
                    if (clicks == 2) clicksCount("u");
                    if (clicks == 3) clicksCount("v");
                    break;
                case "9":
                    if (clicks == 1) clicksCount("w");
                    if (clicks == 2) clicksCount("x");
                    if (clicks == 3) clicksCount("y");
                    if (clicks == 4) clicksCount("z");
                    break;
            }
            clicks = 0;
        }, timeout);
    }).on("mouseup",function(){
        clearTimeout(timer)
    })

    var timerForLongPress;
    $('.buttonStyle').on("mousedown", function () {
        let id = this.id
        timerForLongPress = setTimeout(function () {
            clicksCount(`${id}`)
            clicks=-1;
        },1000);

    }).on("mouseup", function () {
        clearTimeout(timerForLongPress);
        clearTimeout(timer);
    });
}


$(document).ready(()=>{
    handleclicks();
})



// $.event.special.tripleclick = {

//     setup: function (data, namespaces) {
//         var elem = this, $elem = jQuery(elem);
//         $elem.bind('click', jQuery.event.special.tripleclick.handler);
//     },

//     teardown: function (namespaces) {
//         var elem = this, $elem = jQuery(elem);
//         $elem.unbind('click', jQuery.event.special.tripleclick.handler)
//     },

//     handler: function (event) {
//         var elem = this, $elem = jQuery(elem), clicks = $elem.data('clicks') || 0;
//         clicks += 1;
//         if (clicks === 3) {
//             clicks = 0;

//             // set event type to "tripleclick"
//             event.type = "tripleclick";

//             // let jQuery handle the triggering of "tripleclick" event handlers
//             jQuery.event.handle.apply(this, arguments)
//         }
//         $elem.data('clicks', clicks);
//     }

// };