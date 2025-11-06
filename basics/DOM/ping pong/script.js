const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const resetBtn = document.querySelector('#resetBtn');
const playto = document.querySelector('#playto');

playto.addEventListener(('change'),function(){
    winningScore = parseInt(this.value);
    reset();
});

let gameOver = false ; 

let p1score = 0;
let p2score = 0;

btn1.addEventListener('click', function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            gameOver = true;
            score1.classList.add('winner');
            score2.classList.add('loser');
    }  
    score1.textContent = p1score;
    }
})
btn2.addEventListener('click', function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            gameOver = true;
            score2.classList.add('winner');
            score1.classList.add('loser');
    }  
    score2.textContent = p2score;
    }
})
resetBtn.addEventListener('click', reset)

function reset(){
    gameOver = false;
    p1score = 0;
    p2score = 0;
    score1.textContent = p1score;
    score2.textContent = p2score;
    score1.classList.remove('winner','loser');
    score2.classList.remove('loser', 'winner');
}
