import { BasicElement } from "./element";

export class Dialog extends BasicElement{
  constructor(text=''){
    super('dialog', text);
    this.hidden = true;
  }
  toggleModal = () => {
    if(this.hidden){
      this.show_modal();
    }
    else{
      this.close();
    }
  }
  show_modal = () => {
    if(this.hidden){
      this.element.showModal();
      this.hidden = false;
    }
  }
  close = () => {
    if(!this.hidden){
      this.element.close();
      this.hidden = true;
    }
  }
}