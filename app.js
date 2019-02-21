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
            let playerDamage = this.calculateDamage(3, 10);    // Player has lower dmg
            let monsterDamage = this.calculateDamage(5, 12);   // Monster has higher dmg
            
            this.monsterHealth -= playerDamage;
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= monsterDamage;
            if (this.playerHealth <= 0) {
                alert('You Lost!');
                this.gameIsRunning = false;
            }
            this.checkWin();
        },
        specialAttack: function() { // Method for special attack

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