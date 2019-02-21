new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() { // Method for starting game
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {    // Method for attacking
            const playerDamage = this.calculateDamage(3, 10);    // Player has lower dmg
            const monsterDamage = this.calculateDamage(5, 12);   // Monster has higher dmg
            
            this.monsterHealth -= playerDamage;
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= monsterDamage;
            this.checkWin();
        },
        specialAttack: function() { // Method for special attack
            const specialDamage = this.calculateDamage(10, 20);
            this.monsterHealth -= specialDamage;
            if (this.checkWin()) {  // Check win after every special attack
                return;
            }
            this.playerHealth -= this.calculateDamage(5, 12);   // Monster attacks after every player attack
            this.checkWin();
        },
        heal: function() {  // Method for healthing player

        },
        giveUp: function() {    // Method for starting new game

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
    }
});