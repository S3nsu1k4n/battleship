import { BasicElement } from "./element";

export class Input extends BasicElement {
  constructor(name, type, placeholder){
    super('input');
    this.type(type);
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    if (placeholder != ''){ this.placeholder(placeholder) }
    this.required();
    this.max_length(20);
  }
  type = identifier => this.element.setAttribute('type', identifier);
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  required = () => this.element.setAttribute("required", "required");
  max_length = length => this.element.setAttribute('maxlength', length);
  get value(){ return this.element.value }

  on_input = func => this.element.addEventListener('input', func);
}