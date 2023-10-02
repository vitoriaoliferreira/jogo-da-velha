let currentPlayer = 'X';
let jogadorXName = '';
let jogadorOName = '';
let jogadorXplacar = 0;
let jogadorOplacar = 0;
let gameActive = false;

function startGame() {
    jogadorXName = document.getElementById('jogadorX').value;
    jogadorOName = document.getElementById('jogadorO').value;

    if (jogadorXName && jogadorOName) {
        gameActive = true;
        document.getElementById('nomeJogadores').style.display = 'none';
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('reset-button').style.display = 'block';
        resettabuleiro();
    } else {
        alert('Por favor, insira os nomes dos jogadores.');
    }
}

function jogada(row, col) {
    if (!gameActive) return;

    const cell = document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1}) button`);
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const cells = document.querySelectorAll('table button');
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            announceWinner(cells[a].textContent);
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
        announceTie();
    }
}

function announceWinner(winner) {
    gameActive = false;
    if (winner === 'X') {
        jogadorXplacar++;
    } else {
        jogadorOplacar++;
    }
    document.getElementById('jogadorXplacar').textContent = `${jogadorXName}: ${jogadorXplacar}`;
    document.getElementById('jogadorOplacar').textContent = `${jogadorOName}: ${jogadorOplacar}`;
    alert(`Parabéns, Jogador ${winner} venceu!`);
}

function announceTie() {
    gameActive = false;
    alert('O jogo terminou em empate!');
}

function resettabuleiro() {
    const cells = document.querySelectorAll('table button');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
}

function reiniciarJogo() {
    resettabuleiro();
}
