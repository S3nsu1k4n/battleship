export class Ship{
  constructor(length){
    this.length = length;
    this.num_hits = 0;
    this.is_sunk = false;
  }

  hit = () => this.num_hits += 1;

  isSunk = () => this.is_sunk = this.hits >= this.length;
}