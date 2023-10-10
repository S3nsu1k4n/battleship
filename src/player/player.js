export class Player{
  constructor(){
  }

  attack = (x, y) => {
    if(x === undefined && y == undefined){
      return { x: Math.floor(Math.random() * 10),
               y: Math.floor(Math.random() * 10)};
    }
  }

  put_ship_random = ship_length => {
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * (10 - ship_length));
    return {x, y};
  }
}