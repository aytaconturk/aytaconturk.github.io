var scores, roundScore, activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('#current-' + activePlayer).textContent = dice;

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;


//Roll Dice button clicked action
document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice = Math.floor(Math.random() * 6 + 1);

    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        //Next Player
        nextPlayer();

    }
})

//Hold button clicked action
document.querySelector('.btn-hold').addEventListener('click', function(){

    //Add current score to global score
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    }
    else{
        //Next Player
        nextPlayer();
    }
   

})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

