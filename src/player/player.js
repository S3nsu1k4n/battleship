class Player{
  constructor(enemy_gameboard){
    this.enemy_gameboard = enemy_gameboard;
  }

  attack = (x, y) => {
    if (this.enemy_gameboard.isLegalAttack(x, y)){
      this.enemy_gameboard.receive_attack(x, y);
    }
  }
}
module.exports = Player;