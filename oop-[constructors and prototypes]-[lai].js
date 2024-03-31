function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if(this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }

    console.log(this.describe());
}

Player.prototype.describe = function () {
    return `Congrats! ${this.name} is level ${this.lvl} with ${this.points} experience points!`;
}

const player1 = new Player('Kaylyn');
const player2 = new Player('Justin');

player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(10);
player2.gainXp(3);
player2.gainXp(8);
player1.gainXp(10);
player2.gainXp(10);
player2.gainXp(5);
player2.gainXp(6);

