import { BasicElement } from "./element";

export class Img extends BasicElement{
  constructor(src, alt='image', width=64, height=64){
    super('img');
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.init();
  }

  set_src = src => this.element.setAttribute('src', src);
  set_alt = alt => this.element.setAttribute('alt', alt);
  set_width = width => this.element.setAttribute('width', width);
  set_height = height => this.element.setAttribute('height', height);

  init = () => {
    this.set_src(this.src);
    this.set_alt(this.alt);
    this.set_width(this.width);
    this.set_height(this.height);
  }
}