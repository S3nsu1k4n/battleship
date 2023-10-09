import { BasicElement } from "./element";

export class Button extends BasicElement{
  constructor(text=''){
    super('button', text);
    this.element.setAttribute("type", "submit");
  }
}