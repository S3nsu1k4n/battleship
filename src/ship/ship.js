class Ship{
  constructor(length){
    this.length = length;
    this.num_hits = 0;
    this.is_sunk = false;
  }

  hit = () => {
    this.num_hits += 1
  };

  isSunk = () => this.is_sunk = this.num_hits >= this.length;
}
module.exports = Ship