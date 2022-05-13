console.log("Welcome to Tic Tac Toe");

// const music = new Audio("music.mp3");
const ting = new Audio("ting.mp3");
const game_over = new Audio("gameover.mp3");
let turn = 'X';
let gameover = false;


// Function to change the turn
const changeTurn = () => {
    return turn == 'X'? 'O':'X';
}

// Function to check if win
const check_win = () => {
    let box_text = document.getElementsByClassName("box-text");
    const wins = [
        [0, 1, 2, 5, 5, 0, 13, 11, 0],
        [3, 4, 5, 5, 15, 0, 13, 37, 0],
        [6, 7, 8, 5, 25, 0, 13, 62, 0],
        [0, 3, 6, -5, 15, 90, -12, 37, 90],
        [1, 4, 7, 5,  15, 90, 13, 37, 90],
        [2, 5, 8, 15, 15, 90, 38, 37, 90],
        [0, 4, 8, 5, 15, 45, 13, 37, 45],
        [2, 4, 6, 5, 15, 135, 13, 37, 135],
    ]
    wins.forEach(function(e){
        if(box_text[e[0]].innerText == box_text[e[1]].innerText && box_text[e[1]].innerText == box_text[e[2]].innerText && box_text[e[0]].innerText != ""){
            gameover = true;
            game_over.play();
            document.querySelector(".info").innerText = "'" + box_text[e[0]].innerText + "' won!";
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "200px";
            const width = () => {
                const line = document.querySelector(".line");
                window.innerWidth <= 950? line.style.width = "50vw" : line.style.width = "20vw";
            }
            width();
            const transform = () => {
                window.innerWidth >= 950? document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` : document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;
            }
            transform();
            
        }
    })
}

// Main logic
const box = document.getElementsByClassName("box");
Array.from(box).forEach(function(element){
    let box_text = element.querySelector(".box-text");
    element.addEventListener('click', () => {
        if(box_text.innerText == '' && gameover == false){
            box_text.innerText = turn;
            ting.play();
            turn = changeTurn();
            document.getElementsByClassName("info")[0].innerText = "Turn for '" + turn + "'";
        }
        else if(gameover == true){
            element.addEventListener('click', () => {
                if(box_text.innerText == ""){
                    box_text.innerText == "";
                }
                else if(box_text.innerText != ""){
                    box_text.innerText = turn;
                }
            })
        }
        else if(box_text.innerText == 'X' || box_text.innerText == 'O'){
            alert("This space is already taken");
        }
        check_win();
    })
})

// Add onclick button to listener
reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let box_text = document.getElementsByClassName("box-text");
    Array.from(box_text).forEach(function(e) {
        document.querySelector(".line").style.width = "0";
        e.innerText = "";
        document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn for '" + turn + "'";
        gameover = false;
    })
})