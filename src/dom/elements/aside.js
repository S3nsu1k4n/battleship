import { BasicElement } from "./element";

export class Aside extends BasicElement{
  constructor(text=''){
    super('aside', text);
  }
}