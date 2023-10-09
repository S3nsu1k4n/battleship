import { BasicElement } from "./element";

export class H1 extends BasicElement{
  constructor(text=''){
    super('h1', text);
  }
}

export class H2 extends BasicElement{
  constructor(text=''){
    super('h2', text);
  }
}