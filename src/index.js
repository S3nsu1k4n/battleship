import "./css";
import { GameBoard } from './gameboard'
import { Ship } from './ship'
import { Player } from './player'
import { GameBoardDOM } from "./dom";
import { Body } from "./dom";

const body = new Body();
const player_gb_dom = new GameBoardDOM('Player', false);
const enemy_gb_dom = new GameBoardDOM('Enemy', true);
body.add(player_gb_dom, enemy_gb_dom);

const player_gb = new GameBoard();
const enemy_gb = new GameBoard();

const player = new Player(enemy_gb);
const enemy = new Player(player_gb);

let ship;
let coords;

const callback_function = event => {
  // player chooses coords to attack
  if(player_gb.num_ships === 0 || enemy_gb.num_ships === 0){
    return;
  }

  let array = event.target.id.split('_');
  let y = array[1];
  let x = array[2];
  if(enemy_gb.isLegalTarget(x, y)){
    let result = enemy_gb.receiveAttack(x, y);
    enemy_gb_dom.set_field_color(x, y, result == 'X' ? 'red' : 'blue');
    enemy_gb_dom.update_remaining_ships(enemy_gb.num_ships);
    if(enemy_gb.num_ships == 0){
      player_gb_dom.update_message('Player won!!!')
      return;
    }
    if(result == 'X'){
      player_gb_dom.update_message('Player hit a ship!')
    }else if(result == 'W'){
      player_gb_dom.update_message('Player shot and missed!')
    }
    
    
    // enemy randomly chooses coords to attack
    coords = enemy.attack();
    while(!player_gb.isLegalTarget(coords.x, coords.y)) { coords = enemy.attack() }
    result = player_gb.receiveAttack(coords.x, coords.y);
    player_gb_dom.set_field_color(coords.x, coords.y, result == 'X' ? 'red' : 'blue');
    player_gb_dom.update_remaining_ships(player_gb.num_ships);
    if(player_gb.num_ships == 0){
      enemy_gb_dom.update_message('Enemy won!!!')
      return;
    }
    if(result == 'X'){
      enemy_gb_dom.update_message('Enemy hit a ship!')
    }else if(result == 'W'){
      enemy_gb_dom.update_message('Enemy shot and missed!')
    }
  }
}
enemy_gb_dom.on_field_click(callback_function);

// Enemy places ships randomly
for (let len of [5, 4, 3, 3, 2]){
  ship = new Ship(len);
  coords = enemy.put_ship_random(ship.length);
  while (!enemy_gb.can_be_placed(ship.length, coords.x, coords.y)){ coords = enemy.put_ship_random(ship.length) }
  enemy_gb.placeShip(ship, coords.x, coords.y)
}

// Player places ships
for (let len of [5, 4, 3, 3, 2]){
  ship = new Ship(len);
  coords = player.put_ship_random(ship.length); // get coordinates
  while (!player_gb.can_be_placed(ship.length, coords.x, coords.y)){ coords = player.put_ship_random(ship.length) } // get coordinates
  player_gb.placeShip(ship, coords.x, coords.y)
  player_gb_dom.place_ship(ship, coords.x, coords.y);
}



