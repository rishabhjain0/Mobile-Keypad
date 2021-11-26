var clicks = 0;
var timer, timeout = 1000; // time between each click
let flag =0;



// this function is used to append a char or a number in the result
// this function takes two arguments one is char or number which is going to be append and 
// second is number of clicks user has done in a short span so that we can append character accordingly
var appendCharOrNumber = function (charToBeAdded, clicks) {
    let data = $("#op").text();
    if (clicks != 1)
        data = data.slice(0, data.length - 1);

    data += charToBeAdded;
    $("#op").text(data);
}
// end

// handle click function will handle all the clicks and events
const handleclicks = () => {
    // click event on astrick zero and hash button
    $("#star").click(() => {
        appendCharOrNumber("*",1);
    })

    $("#0").click(() => {
        appendCharOrNumber("0",1);
    })
    $("#hash").click(() => {
        appendCharOrNumber("#",1);
    })
    $("#space").click(() => {
        appendCharOrNumber(" ", 1);
    })
    // end

    // click event to clear the display
    $("#clear").click(() => {
        $("#op").text("");
    })
    // end

    // handles all the clicks happens on other buttons
    //  I have used jqeury event.detail which provides the number of clicks happend instantly on a button
    // for making it more dynamic I have attached click on a class (This class is given to all the buttons having multiple characters) then 
    //I have taken the id of the eliment which have been clicked
    $(".buttonStyle").unbind().click(function (evt) {
        let clicks = evt.detail;
        if(!flag){
            switch (this.id) {
                case "1":
                    if (clicks == 1) appendCharOrNumber(".", clicks);
                    if (clicks == 2) appendCharOrNumber(",", clicks);
                    if (clicks == 3) appendCharOrNumber("!", clicks);

                    break;
                case "2":
                    if (clicks == 1) appendCharOrNumber("a", clicks);
                    if (clicks == 2) appendCharOrNumber("b", clicks);
                    if (clicks == 3) appendCharOrNumber("c", clicks);

                    break;
                case "3":
                    if (clicks == 1) appendCharOrNumber("d", clicks);
                    if (clicks == 2) appendCharOrNumber("e", clicks);
                    if (clicks == 3) appendCharOrNumber("f", clicks);
                    break;
                case "4":
                    if (clicks == 1) appendCharOrNumber("g", clicks);
                    if (clicks == 2) appendCharOrNumber("h", clicks);
                    if (clicks == 3) appendCharOrNumber("i", clicks);
                    break;
                case "5":
                    if (clicks == 1) appendCharOrNumber("j", clicks);
                    if (clicks == 2) appendCharOrNumber("k", clicks);
                    if (clicks == 3) appendCharOrNumber("l", clicks);
                    break;
                case "6":
                    if (clicks == 1) appendCharOrNumber("m", clicks);
                    if (clicks == 2) appendCharOrNumber("n", clicks);
                    if (clicks == 3) appendCharOrNumber("o", clicks);
                    break;
                case "7":
                    if (clicks == 1) appendCharOrNumber("p", clicks);
                    if (clicks == 2) appendCharOrNumber("q", clicks);
                    if (clicks == 3) appendCharOrNumber("r", clicks);
                    if (clicks == 4) appendCharOrNumber("s", clicks);
                    break;
                case "8":
                    if (clicks == 1) appendCharOrNumber("t", clicks);
                    if (clicks == 2) appendCharOrNumber("u", clicks);
                    if (clicks == 3) appendCharOrNumber("v", clicks);
                    break;
                case "9":
                    if (clicks == 1) appendCharOrNumber("w", clicks);
                    if (clicks == 2) appendCharOrNumber("x", clicks);
                    if (clicks == 3) appendCharOrNumber("y", clicks);
                    if (clicks == 4) appendCharOrNumber("z", clicks);
                    break;
            }
        }
        else{
            flag =0;
        }
      
    })

    var timerForLongPress;
    $('.buttonStyle').on("mousedown", function () {
        let id = this.id
        timerForLongPress = setTimeout(function () {
            appendCharOrNumber(`${id}`,1)
            flag =1;
        },800);

    }).on("mouseup", function () {
        clearTimeout(timerForLongPress);
        clearTimeout(timer);
    });
}
//handle clicks ends


// document ready is a inbuilt jquery function which is automatically fired when a script runs on the browser

$(document).ready(() => {
    handleclicks();
})
// ready ends
