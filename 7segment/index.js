function dispNum(position, num, color) {

    let topBar = position[0].childNodes[1]
    let first_two_1 = position[0].childNodes[3].childNodes[1]
    let first_two_2 = position[0].childNodes[3].childNodes[3]
    let midBar = position[0].childNodes[5]
    let second_two_1 = position[0].childNodes[7].childNodes[1]
    let second_two_2 = position[0].childNodes[7].childNodes[3]
    let bottomBar = position[0].childNodes[9]

    switch (num) {
        case 0:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 1:
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 2:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            bottomBar.style.background = color
            break;
        case 3:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 4:
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            break;
        case 5:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 6:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 7:
            topBar.style.background = color
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 8:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 9:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        default:
            topBar.style.background = "transparent"
            first_two_1.style.background = "transparent"
            first_two_2.style.background = "transparent"
            midBar.style.background = "transparent"
            second_two_1.style.background = "transparent"
            second_two_2.style.background = "transparent"
            bottomBar.style.background = "transparent"
            break;

    }

}


// analogue functioning

const bars = document.getElementsByClassName("bar")
const num1 = document.getElementsByClassName("num1")
const num2 = document.getElementsByClassName("num2")
const num3 = document.getElementsByClassName("num3")
const select_color_text = document.getElementById("select-color-text")

// refresh twice every second
setInterval(() => {

    // reset grid
    dispNum(num1, -1)
    dispNum(num2, -1)
    dispNum(num3, -1)
    let color = document.getElementById("color").value
    const integer = document.getElementById("number").value
    let ones = 0
    let tens = 0
    let hund = 0
    select_color_text.style.color = color
    if (integer >= 1000) {
        alert("number should be below 1000")
        document.getElementById("number").value = 0
        return
    }
    if (integer >= 100) {
        hund = Math.floor(integer / 100)
        tens = Math.floor((integer - (hund * 100)) / 10)
        ones = Math.floor((integer - (hund * 100)) - (tens * 10))
        dispNum(num1, hund, color)
        dispNum(num2, tens, color)
        dispNum(num3, ones, color)
    }
    else if (integer <= 99) {
        tens = Math.floor(integer / 10)
        ones = Math.floor((integer - (tens * 10)))
        dispNum(num2, tens, color)
        dispNum(num3, ones, color)
    } else if (integer <= 9) {
        ones = integer
        dispNum(num3, ones, color)
    }
}, 500)



// clock functioning
const Hour_tens = document.getElementsByClassName("Hour-tens")
const Hour_ones = document.getElementsByClassName("Hour-ones")
const mins_tens = document.getElementsByClassName("mins-tens")
const mins_ones = document.getElementsByClassName("mins-ones")
const sec_tens = document.getElementsByClassName("sec-tens")
const sec_ones = document.getElementsByClassName("sec-ones")

setInterval(() => {
    let d = new Date();
    let hh = d.getHours()
    let mm = d.getMinutes()
    let ss = d.getSeconds()
    color = document.getElementById("color").value
    
    // reset
    dispNum(Hour_tens, -1)
    dispNum(Hour_ones, -1)
    dispNum(mins_tens, -1)
    dispNum(mins_ones, -1)
    dispNum(sec_tens, -1)
    dispNum(sec_ones, -1)

    // set
    dispNum(Hour_tens, Math.floor(hh / 10), color)
    dispNum(Hour_ones, (hh - ((Math.floor(hh / 10)) * 10)),color)
    dispNum(mins_tens, Math.floor(mm / 10), color)
    dispNum(mins_ones, (mm - ((Math.floor(mm / 10)) * 10)), color)
    dispNum(sec_tens, Math.floor(ss / 10), color)
    dispNum(sec_ones, (ss - ((Math.floor(ss / 10)) * 10)), color)

    delete d
}, 1000)


