import { BasicElement } from "./element";

export class P extends BasicElement{
  constructor(text=''){
    super('p', text);
  }
}