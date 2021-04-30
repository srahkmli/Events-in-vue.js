//regualer js
function getRandomvalue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Vue
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMassages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //draw
                this.winner = 'draw'
            } else if (value <= 0) {
                //player lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //draw
                this.winner = 'draw'
            } else if (value <= 0) {
                //monster lost
                this.winner = 'player'
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMassages = [];
        },
        attackMonster() {
            this.currentRound++;
            console.log("attacked")
            const attackValue = getRandomvalue(5, 12);
            this.monsterHealth -= attackValue;
            this.addlogMassages('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomvalue(8, 15);
            this.addlogMassages('monster', 'attack', attackValue);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomvalue(10, 25);
            this.monsterHealth -= attackValue;
            this.addlogMassages('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomvalue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else { this.playerHealth += healValue; }
            this.addlogMassages('player', 'heal', healValue);
            this.attackPlayer();
        },
        sureender() {
            this.winner = 'monster'
        },
        addlogMassages(who, what, value) {
            this.logMassages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value

            });
        },

    },
});

app.mount('#game');