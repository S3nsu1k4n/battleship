import { Div, Form } from "./elements";
import { InputType } from "./input_types";

export class Searchbar extends Div{
  constructor(placeholder=''){
    super();
    this.add_class('searchbar');
    this.placeholder = placeholder;
    this.input;
    this.button;
    this.init();
  }

  init = () => {
    const form = new Form();
    this.input = form.add_input('searchbar_input', InputType.search, this.placeholder)
    this.button = form.add_button('Search');
    this.add_node(form);
  }

  get value(){ return this.input.value };

  on_button_click = func => this.button.on_click(func);
}