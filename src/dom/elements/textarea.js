import { BasicElement } from "./element";

export class Textarea extends BasicElement {
  constructor(name, placeholder, rows, cols){
    super('textarea');
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    this.placeholder(placeholder);
    this.rows(rows);
    this.cols(cols);
  }
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  rows = value => this.element.setAttribute('rows', value);
  cols = value => this.element.setAttribute('cols', value);
}