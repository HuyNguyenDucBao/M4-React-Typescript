interface Player {
    id: number;
    name: string;
    score: number;
}

class ScoreBoard {
    private players: Player[];

    constructor() {
        const storedPlayers = localStorage.getItem('players');
        this.players = storedPlayers ? JSON.parse(storedPlayers) : [
            { id: 1, name: "Long Lung Linh", score: 0 },
            { id: 2, name: "Hữu Minh Cường", score: 0 },
            { id: 3, name: "Y Khoa", score: 0 }
        ];
        this.saveToLocalStorage();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('players', JSON.stringify(this.players));
    }

    renderPlayers(): void {
        const tableBody = document.getElementById('playerTableBody') as HTMLTableElement;
        tableBody.innerHTML = '';
    
        // Tìm điểm cao nhất
        const highestScore = Math.max(...this.players.map(p => p.score));
    
        this.players.forEach(player => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><button class="delete-btn">x</button> ${player.name}</td>
                <td>
                    <button class="score-btn minus">-</button>
                    <span class="score">${player.score}</span>
                    <button class="score-btn plus">+</button>
                    ${player.score === highestScore && player.score > 0 ? '<span class="crown">👑</span>' : ''}
                </td>
            `;
    
            const deleteBtn = row.querySelector('.delete-btn') as HTMLButtonElement;
            deleteBtn.onclick = () => this.deletePlayer(player.id);
    
            const minusBtn = row.querySelector('.minus') as HTMLButtonElement;
            minusBtn.onclick = () => this.updatePlayer(player.id, -1);
    
            const plusBtn = row.querySelector('.plus') as HTMLButtonElement;
            plusBtn.onclick = () => this.updatePlayer(player.id, 1);
        });
    
        this.updateHeader();
    }

    createPlayer(name: string): void {
        const newId = this.players.length > 0 ? Math.max(...this.players.map(p => p.id)) + 1 : 1;
        const newPlayer: Player = { id: newId, name, score: 0 };
        this.players.push(newPlayer);
        this.saveToLocalStorage();
        this.renderPlayers();
    }

    updatePlayer(id: number, scoreChange: number): void {
        const player = this.players.find(p => p.id === id);
        if (player) {
            player.score += scoreChange;
            if (player.score < 0) player.score = 0;
            this.saveToLocalStorage();
            this.renderPlayers();
        }
    }

    deletePlayer(id: number): void {
        this.players = this.players.filter(p => p.id !== id);
        this.saveToLocalStorage();
        this.renderPlayers();
    }

    private updateHeader(): void {
        const playerCount = document.getElementById('playerCount') as HTMLElement;
        const totalPoints = document.getElementById('totalPoints') as HTMLElement;
        
        playerCount.textContent = this.players.length.toString();
        totalPoints.textContent = this.players.reduce((sum, player) => sum + player.score, 0).toString();
    }
}

const scoreBoard = new ScoreBoard();

document.addEventListener('DOMContentLoaded', () => {
    scoreBoard.renderPlayers();

    const addPlayerForm = document.getElementById('addPlayerForm') as HTMLFormElement;
    addPlayerForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const nameInput = document.getElementById('playerName') as HTMLInputElement;
        const name = nameInput.value.trim();

        if (name) {
            scoreBoard.createPlayer(name);
            nameInput.value = '';
        }
    });
}); 