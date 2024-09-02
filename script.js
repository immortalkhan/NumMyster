let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to update score
const updateScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

// Function to update the displayed number
const updateNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

// Function to update background color
const updateBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Function to update number width
const updateNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// Function to handle game over
const handleGameOver = function () {
  displayMessage('😓 You lost the game!');
  updateScore(0);
};

// Function to handle win
const handleWin = function () {
  displayMessage('🎉 Correct Number!');
  updateNumber(secretNum);
  updateBackgroundColor('#60b347');
  updateNumberWidth('30rem');

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

// Event listener for the 'Check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNum) {
    handleWin();
  } else {
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too High' : '📉 Too Low');
      score--;
      updateScore(score);
    } else {
      handleGameOver();
    }
  }
});

// Event listener for the 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing....');
  updateScore(score);
  updateNumber('?');
  document.querySelector('.guess').value = '';

  updateBackgroundColor('#222');
  updateNumberWidth('15rem');
});
