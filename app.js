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
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min); // Generates random num between 3-10
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert('You Won!');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert('You Lost!');
                this.gameIsRunning = false;
                return;
            }
        },
        specialAttack: function() { // Method for special attack

        },
        heal: function() {  // Method for healthing player

        },
        giveUp: function() {    // Method for starting new game

        },
    }
});