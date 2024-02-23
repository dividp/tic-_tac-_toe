let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function handleClick(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        checkWin();
        checkDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            messageElement.innerText = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }
}

function checkDraw() {
    if (!board.includes('')) {
        messageElement.innerText = 'Draw!';
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    messageElement.innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
