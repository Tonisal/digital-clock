$(document).ready(function () {
    setInterval(function () {
        var time = getCurrentTime();
        buildTime(time, translate);

    }, 1000);

    setInterval(function () {
        setTimeToRoundClock();

    }, 1000);
});

translate = {
    1: {
        top: ['u-no-border-top u-no-border-left u-no-border-bottom'],
        bottom: ['u-no-border-bottom u-no-border-left']
    },

    2: {
        top: ['u-no-border-left'],
        bottom: ['u-no-border-right']
    },
    3: {
        top: ['u-no-border-left'],
        bottom: ['u-no-border-left']
    },

    4: {
        top: ['u-no-border-top'],
        bottom: ['u-no-border-left u-no-border-bottom']
    },
    5: {
        top: ['u-no-border-right'],
        bottom: ['u-no-border-left']
    },

    6: {
        top: ['u-no-border-right'],
        bottom: ['']
    },
    7: {
        top: ['u-no-border-left u-no-border-bottom'],
        bottom: ['u-no-border-bottom u-no-border-left']
    },

    8: {
        top: [''],
        bottom: ['']
    },
    9: {
        top: [''],
        bottom: ['u-no-border-left']
    },

    0: {
        top: ['u-no-border-bottom'],
        bottom: ['']
    }
};


function getCurrentTime() {
    var date = new Date();

    var time = new Object();
    time.hours = date.getHours();
    time.minutes = date.getMinutes();
    time.seconds = date.getSeconds();
    //Add leading zero
    if (time.seconds < 10) {
        time.seconds = time.seconds.toString();
        time.seconds = "0" + time.seconds;
    }

    if (time.minutes < 10) {
        time.minutes = time.minutes.toString();
        time.minutes = "0" + time.minutes;
    }

    if (time.hours < 10) {
        time.hours = time.hours.toString();
        time.hours = "0" + time.hours;
    }
    // console.log(time);
    return time;
}

function buildTime(time, translate) {
    var digitArray = [];

    for (var key in time) {

        var digits = time[key].toString().split('');
        for (var i = 0; i < digits.length; i++) {
            digitArray.push(digits[i]);
        }
    }

    console.log(digitArray);

    for (var i = 0; i < digitArray.length; i++) {
        var numberToDisplay = digitArray[i];
        var ClassesToSetTop = translate[i].top;
        var ClassesToSetBottom = translate[i].bottom;
        var $digitalPartTop = '#digit-' + [i] + ' .digit-part--top';
        var $digitalPartBottom = '#digit-' + [i] + ' .digit-part--bottom';

        $($digitalPartTop).attr('class', 'digit-part digit-part--top');
        $($digitalPartTop).addClass(translate[numberToDisplay].top);

        $($digitalPartBottom).attr('class', 'digit-part digit-part--bottom');
        $($digitalPartBottom).addClass(translate[numberToDisplay].bottom);

    }
}

function setTimeToRoundClock() {
    var date = new Date();
    var time = new Object();
    time.seconds = date.getSeconds();
    time.minutes = date.getMinutes();
    time.hours = date.getHours();
    var degreeToRotate = new Object();
    degreeToRotate.seconds = (time.seconds -15) * 6;
    degreeToRotate.minutes = (time.minutes -15) * 6;
    degreeToRotate.hours = (time.hours -15) * 6;
    
    $('.seconds-pointer').css('transform', 'rotate('+ degreeToRotate.seconds + 'deg)');
    $('.minutes-pointer').css('transform', 'rotate('+ degreeToRotate.minutes + 'deg)');
    $('.hours-pointer').css('transform', 'rotate('+ degreeToRotate.hours + 'deg)');
}
