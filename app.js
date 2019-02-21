new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() { // Method for starting game
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {    // Method for attacking
            const playerDamage = this.calculateDamage(3, 10);    // Player has lower dmg

            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster for ${playerDamage}`
            });
            this.monsterHealth -= playerDamage;
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function() { // Method for special attack
            const specialDamage = this.calculateDamage(10, 20);
            this.monsterHealth -= specialDamage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster with special for ${specialDamage}`
            });
            if (this.checkWin()) {  // Check win after every special attack
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {  // Method for healthing player
            const heal = 10;
            if (this.playerHealth <= 90) {
                this.playerHealth += heal;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals for ${heal}`
            });
            this.monsterAttacks();
        },
        giveUp: function() {    // Method for starting new game
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min); // Generates random num between 3-10
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function() {
            const monsterDamage = this.calculateDamage(5, 12);   // Monster has higher dmg
            this.playerHealth -= monsterDamage;
            this.checkWin()
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${monsterDamage}`
            });
        }
    }
});