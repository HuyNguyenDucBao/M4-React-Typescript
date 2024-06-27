"use strict";
class ScoreBoard {
    constructor() {
        const storedPlayers = localStorage.getItem('players');
        this.players = storedPlayers ? JSON.parse(storedPlayers) : [
            { id: 1, name: "Long Lung Linh", score: 0 },
            { id: 2, name: "Hữu Minh Cường", score: 0 },
            { id: 3, name: "Y Khoa", score: 0 }
        ];
        this.saveToLocalStorage();
    }
    saveToLocalStorage() {
        localStorage.setItem('players', JSON.stringify(this.players));
    }
    renderPlayers() {
        const tableBody = document.getElementById('playerTableBody');
        tableBody.innerHTML = '';
        // Tìm điểm cao nhất
        const highestScore = Math.max(...this.players.map(p => p.score));
        this.players.forEach(player => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><button class="delete-btn">X</button> ${player.name}</td>
                <td class="point">
                    <button class="score-btn minus">-</button>
                    <span class="score">${player.score}</span>
                    <button class="score-btn plus">+</button>
                    ${player.score === highestScore && player.score > 0 ? '<span class="crown">👑</span>' : ''}
                </td>
            `;
            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.onclick = () => this.deletePlayer(player.id);
            const minusBtn = row.querySelector('.minus');
            minusBtn.onclick = () => this.updatePlayer(player.id, -1);
            const plusBtn = row.querySelector('.plus');
            plusBtn.onclick = () => this.updatePlayer(player.id, 1);
        });
        this.updateHeader();
    }
    createPlayer(name) {
        const newId = this.players.length > 0 ? Math.max(...this.players.map(p => p.id)) + 1 : 1;
        const newPlayer = { id: newId, name, score: 0 };
        this.players.push(newPlayer);
        this.saveToLocalStorage();
        this.renderPlayers();
    }
    updatePlayer(id, scoreChange) {
        const player = this.players.find(p => p.id === id);
        if (player) {
            player.score += scoreChange;
            if (player.score < 0)
                player.score = 0;
            this.saveToLocalStorage();
            this.renderPlayers();
        }
    }
    deletePlayer(id) {
        this.players = this.players.filter(p => p.id !== id);
        this.saveToLocalStorage();
        this.renderPlayers();
    }
    updateHeader() {
        const playerCount = document.getElementById('playerCount');
        const totalPoints = document.getElementById('totalPoints');
        playerCount.textContent = this.players.length.toString();
        totalPoints.textContent = this.players.reduce((sum, player) => sum + player.score, 0).toString();
    }
}
const scoreBoard = new ScoreBoard();
document.addEventListener('DOMContentLoaded', () => {
    scoreBoard.renderPlayers();
    const addPlayerForm = document.getElementById('addPlayerForm');
    addPlayerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('playerName');
        const name = nameInput.value.trim();
        if (name) {
            scoreBoard.createPlayer(name);
            nameInput.value = '';
        }
    });
});
