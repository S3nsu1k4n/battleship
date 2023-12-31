import { Ship } from '../ship'

const Field = {
  empty: '-',
  hit: 'X',
  water: 'W',
}

export class GameBoard{
  constructor(){
    this.length = 9;
    this.matrix = [];
    this.num_ships = 0;
    this.init_matrix();
  }

  init_matrix = () => {
    for (let i = 0; i <= this.length; i+=1) {
      this.matrix.push([Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty,Field.empty]);
    }
  }

  can_be_placed = (length, x, y) => {
    for (const char of this.matrix[y].join('').substring(x, x + length)){
      if (char != Field.empty){ return false }
    }
    return true;
  }

  set_field = (token, x, y) => this.matrix[y][x] = token;

  placeShip = (ship, x, y, rotated=false) => {
    // place ship at specific coordinates using Ship class
    if (ship.length + x <= 10){
      if (this.can_be_placed(ship.length, x, y)){
        for (let i = x; i < ship.length + x; i++){
          this.set_field(ship, i, y)
        }
        this.num_ships += 1;
        return true;
      }
    }
    return false;
  }

  isLegalTarget = (x, y) => this.matrix[y][x] === Field.empty || this.matrix[y][x] instanceof Ship;

  receiveAttack = (x, y) => {
    // check if hit ship
    // call hit function of correct ship if hit
    // record coordinates of missed shots
    const field = this.matrix[y][x];
    if (field instanceof Ship){
      field.hit();
      this.set_field(Field.hit, x, y)
      if (field.isSunk()){
        this.num_ships --;
      }
      return Field.hit;
    }
    else {
      this.set_field(Field.water, x, y)
      return Field.water;
    }
  }

  all_ships_sunk = () => this.num_ships == 0;
}
