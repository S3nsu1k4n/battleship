import { BasicElement } from "./element";

export class Div extends BasicElement{
  constructor(text=''){
    super('div', text);
  }
}