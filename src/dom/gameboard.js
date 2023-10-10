import { Div, H1, P } from './elements'

export class GameBoardDOM extends Div{
  constructor(name, is_enemy){
    super();
    this.is_enemy = is_enemy;
    this.click_callback;
    this.board = [];
    this.add_class('gameboard');

    this.name = new H1(name);
    this.name.add_class('name');
    this.ships_remain = new P('Ships remaining: ???');
    this.ships_remain.add_class('ships_remaining');
    this.message = new P('Message');
    this.message.add_class('message');
    this.top_section = new Div();
    this.top_section.add_class('gameboard_top');
    this.top_section.add_node(this.name, this.ships_remain, this.message);
    
    this.bottom_section = new Div();
    this.bottom_section.add_class('gameboard_bottom');
    for(let i = 0; i < 10; i++){
      this.board.push([]);
      for(let j = 0; j < 10; j++){
        let field = new Div();
        field.add_class('field');
        field.set_id(`coord_${i}_${j}`);
        if(this.is_enemy){
          this.#hover(field);
          field.on_click(this.#on_click);
        }
        this.board[i].push(field);
        this.bottom_section.add_node(field);
      }
    }
    this.add_node(this.top_section, this.bottom_section);
  }
  set_field_color = (x, y, color) => {
    this.board[y][x].element.style.backgroundColor = color
  };

  place_ship = (ship, x, y) => {
    for(let i = x; i < x + ship.length; i++){
      this.set_field_color(i, y, 'gray');
    }
  }

  #hover = field => {
    field.on_hover_in(() => {
      if (field.element.style.backgroundColor === ''){
        field.element.style.backgroundColor = 'lightgray';
      }
    })
    field.on_hover_out(() => {
      if (field.element.style.backgroundColor === 'lightgray'){
        field.element.style.backgroundColor = '';
      }
    })
  }
  #on_click = event => {
    this.click_callback(event);
  }
  
  on_field_click = func => {
    this.click_callback = func;
  }

  update_remaining_ships = amount => this.ships_remain.set_text(`Ships remaining: ${amount}`);

  update_message = string => this.message.set_text(string);
}