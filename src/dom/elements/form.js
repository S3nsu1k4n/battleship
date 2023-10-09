import { BasicElement } from "./element";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export class Form extends BasicElement {
  constructor(){
    super('form');
  }
  add_label = name => this.add_node(new Label(name));

  add_input = (name, type='text', placeholder='') => this.add_node(new Input(name, type, placeholder));

  add_text_area = (name, placeholder='Enter text here...', rows=4, cols=50) => this.add_node(new Textarea(name, placeholder, rows, cols));
  
  add_button = name => {
    this.button = new Button(name);
    this.add_node(this.button);
    return this.button;
  };
}