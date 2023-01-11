// bugs (which i dont want to Fix)
// if you anyhow manage to play it (2^1024)/2 times the limit it will exceed the limit of stoorage and game will crash


const a11 = document.getElementById("11")
const a12 = document.getElementById("12")
const a13 = document.getElementById("13")
const a21 = document.getElementById("21")
const a22 = document.getElementById("22")
const a23 = document.getElementById("23")
const a31 = document.getElementById("31")
const a32 = document.getElementById("32")
const a33 = document.getElementById("33")
const resettimer = document.getElementById("resettimer")
const mainContainer = document.getElementById("main")
const gridfield = document.getElementsByClassName("box")
const P1txt = document.getElementById("Player-1-text")
const P2txt = document.getElementById("Player-2-text")
const grid = [a11, a12, a13, a21, a22, a23, a31, a32, a33]

// enable and disable click functions
function enableClick() {
    grid.forEach((i) => {
        i.style["pointer-events"] = "all"
    })
}

function disableClick() {
    grid.forEach((i) => {
        i.style["pointer-events"] = "none"
    })
}

// reset grid function
function reset(list) {
    list.forEach((i) => {
        i.style["background-color"] = "white"
    })
}

function checkWin(list) {
    if (list.indexOf("11") != -1 && list.indexOf("12") != -1 && list.indexOf("13") != -1) { return true }
    else if (list.indexOf("21") != -1 && list.indexOf("22") != -1 && list.indexOf("23") != -1) { return true }
    else if (list.indexOf("31") != -1 && list.indexOf("32") != -1 && list.indexOf("33") != -1) { return true }
    else if (list.indexOf("11") != -1 && list.indexOf("21") != -1 && list.indexOf("31") != -1) { return true }
    else if (list.indexOf("12") != -1 && list.indexOf("22") != -1 && list.indexOf("32") != -1) { return true }
    else if (list.indexOf("13") != -1 && list.indexOf("23") != -1 && list.indexOf("33") != -1) { return true }
    else if (list.indexOf("11") != -1 && list.indexOf("22") != -1 && list.indexOf("33") != -1) { return true }
    else if (list.indexOf("13") != -1 && list.indexOf("22") != -1 && list.indexOf("31") != -1) { return true }
    else { return false }
}



// initialise each box in grid
reset(grid)

const user1moves = []
const user2moves = []


P1txt.style["background-color"] = " #d9effd "
// P1txt.style["background-color"] = " #d9effd "
// P2txt.style["background-color"] = " #ffe5b4 "

let moveNo = 2
const move = (box) => {

    if (box.style["background-color"] === "white") {
        if (moveNo % 2 === 0) {
            box.style["background-color"] = "#87b7eb";
            user1moves.push(box.dataset.id)

            moveNo += 1

            // switch player move display
            P1txt.style["background-color"] = " #ffffff "
            P2txt.style["background-color"] = " #ffe5b4 "

        } else {
            box.style["background-color"] = "#ffaf12";
            user2moves.push(box.dataset.id)

            moveNo += 1

            // switch player move display
            P1txt.style["background-color"] = " #d9effd "
            P2txt.style["background-color"] = " #ffffff "
        }
    }
    // play undo condition (🤫 its cheating) 
    // else {
    //     box.style["background-color"] = "white";
    // }

    win1 = checkWin(user1moves)
    win2 = checkWin(user2moves)
    win = user1moves.length + user2moves.length === 9
    if (win1 || win2 || win) {
        
        disableClick()

        if (win1) {
            mainContainer.style["background-color"] = "#89d1ff";
            P2txt.style.display = "none"
            P1txt.style.transform = "scale(2)";
            P1txt.style.background = "transparent";
        } else if (win2) {
            mainContainer.style["background-color"] = "#ffc960";
            P1txt.style.display = "none"
            P2txt.style.transform = "scale(2)";
            P2txt.style.background = "transparent";

        } else {
            mainContainer.style["background-color"] = "#EBEBEB";
            P1txt.style.display = "none"
            P2txt.style.display = "none"
        }

        // resetTimer countDown
        let i = 0
        setInterval(() => {
            i += 1
            if (i >= 4) {
                return
            }
            resettimer.innerHTML = (3 - i) + " s"
        }, 980)

        // add delay to reset
        setTimeout(() => {
            reset(grid)
            enableClick()
            mainContainer.style["background-color"] = "transparent";
            P1txt.style.display = "flex"
            P2txt.style.display = "flex"
            P1txt.style.transform = "scale(1)"
            P2txt.style.transform = "scale(1)"


        }, 3000)

        // empty usermoves arrays
        user1moves.length = 0
        user2moves.length = 0

    }


}