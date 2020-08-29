    let randomNumber = Math.floor(Math.random() * 50) + 1;//variable storing random numbers generated

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const loworHi = document.querySelector('.loworHi');

    const guessField = document.querySelector('.guessField');
    const submit = document.querySelector('.submit');

    let guessCount = 1;
    let resetButton;
    guessField.focus();

    function guessGame(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = 'Previous Guess: ';
    }
    guesses.textContent += userGuess + ', ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Wow...You Won, CONGRATULATION!!!';
        lastResult.style.backgroundColor = 'green';
        loworHi.textContent = '';
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = 'GAME OVER';
        setGameOver();
    }
    else{
        lastResult.textContent = "WRONG GUESS";
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            loworHi.textContent = 'Too LOW';
        }
            else if(userGuess > randomNumber){
                loworHi.textContent = 'Too high';
            }
        
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
    }
    submit.addEventListener('click', guessGame);
    function setGameOver(){
        guessField.disabled = true;
        submit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start New Game';
        document.body.append(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
    function resetGame(){
        guessCount = 1;
        const resetcont = document.querySelectorAll('.resultcontainer p');
        for(let i = 0; i < resetcont.length; i++){
            resetcont[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        submit.disabled = false;
        guessField.value = '';
        guessField.focus();

        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 50) + 1;
    }



