export class Body{
  constructor(){
    this.element = document.querySelector('body');
  }
  add = (...nodes) => {
    for(const node of nodes){
      this.element.appendChild(node.element);
    }
  };
}