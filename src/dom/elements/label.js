import { BasicElement } from "./element";

export class Label extends BasicElement {
  constructor(name){
    super('label', name);
    this.for(name.toLowerCase());
  }
  for = name => this.element.setAttribute('for', name); 
}