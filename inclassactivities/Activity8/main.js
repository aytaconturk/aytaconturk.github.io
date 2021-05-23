// set default variables
let levelCount = 1;
let count = 0;
let $ = function (id) {return document.getElementById(id);};
let button = $('button');
let positionInfo = button.getBoundingClientRect();
let btnHeight = positionInfo.height;
let btnWidth = positionInfo.width;
let time = 500; // timeout milliseconds value
let flag = false // for mouseover event

function setDefaultVariables() {
    levelCount = 0;
    count = 0;
    time = 500; // timeout milliseconds value
}



function changePosition() {
    flag = true

    setTimeout(function () {
        if(flag === true){
            // change mouseover status
            flag = false

            //Get the width and height of the screen. if the container is not the screen
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;

            //Generate a random top and left position for the button
            let x_pos = Math.floor(Math.random() * (screenWidth - btnWidth));
            let y_pos = Math.floor(Math.random() * (screenHeight - btnHeight));

            // change button position
            button.style.left = x_pos + 'px';
            button.style.top = y_pos + 'px';

        }

    }, time);

}

function clickButton() {

    console.log('clicked');

    count++
    console.log('count: ' + count);

    if(count === 3){
        count = 0;
        levelCount++;

        // show the message with sweetalert2 plugin
        Swal.fire({
            icon: 'success',
            title: 'You are the winner!',
            text: 'You can go next level ' + levelCount,
        })

        //increase time value on next level
        time = time - 100;
    }

    console.log('level: ' + levelCount);
}


