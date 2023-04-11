import { LitElement, html, css  } from "lit";

export class HeaderContainer extends LitElement{
    static get styles() {
        return css`
          div { color: red; }
        `;
    }

   static get properties() {
      return { message: 'PEPE', text: ''};
  }
  
   constructor(){
    super();
    this.message = 'Hello container';
    this.text = 'pepe';
   }
    render(){
        return html`
        <div>${this.message} ${this.text}</div>
        <slot></slot>
        `;
    };
}