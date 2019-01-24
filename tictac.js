let cells = document.querySelectorAll(".cell");
let player = "X";

cells.forEach(function (cell) {
    cell.addEventListener('click', cellClicked);
})


let c1 = document.getElementById("1")
let c2 = document.getElementById("2")
let c3 = document.getElementById("3")
let c4 = document.getElementById("4")
let c5 = document.getElementById("5")
let c6 = document.getElementById("6")
let c7 = document.getElementById("7")
let c8 = document.getElementById("8")
let c9 = document.getElementById("9")


let winningCombinations = [
    [c1, c2, c3],
    [c4, c5, c6],
    [c7, c8, c9],
    [c1, c5, c9],
    [c1, c4, c7],
    [c2, c5, c8],
    [c2, c4, c8],
    [c3, c6, c9]
]
function cellClicked(e) {
    if (e.target.textContent == "") {
        e.target.textContent = player
        winCheck()
        if (player == "O") {
            player = "X";
        } else {
            player = "O";
        }
    }

}


function winCheck() {
    for (var i = 0; i < winningCombinations.length; i++) {
        let counter = 0
        var wins = winningCombinations[i].length
        for (var j = 0; j < wins; j++) {
            let winCells = winningCombinations[i][j].textContent

            if (winCells == player) {
                counter++
            }
            if (counter == 3) {
                alert("Congrats " + player + " you won!")
            }
        }
    }

}