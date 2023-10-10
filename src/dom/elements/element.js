export class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }

  set_text = text => this.element.innerText = text;

  add_class = class_name => this.element.classList.add(class_name);

  add_node = (...nodes) => {
    let last_element = undefined;
    for(const node of nodes){
      last_element = this.element.appendChild(node.element);
    }
    return last_element;
  };
  set_id = string => this.element.id = string;
  on_click = func => this.element.addEventListener('click', func);

  on_hover_in = func => this.element.addEventListener('mouseover', func);
  on_hover_out = func => this.element.addEventListener('mouseout', func);
  
  init = () => {
    this.set_text(this.text);
  }
}