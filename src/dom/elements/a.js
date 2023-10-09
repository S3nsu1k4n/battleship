import { BasicElement } from "./element";

export class A extends BasicElement{
  constructor(href=''){
    super('a');
    if (href != ''){
      this.set_href(href);
    }
  }

  set_href = href => this.element.setAttribute('href', href);
}