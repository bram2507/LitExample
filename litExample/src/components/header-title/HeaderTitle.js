import { LitElement,html,css } from "lit";

export class HeaderTitle extends LitElement{
   static styles = css`
    :hot {
    }
   `;
   static properties = {};
   constructor(){
    super();
   }
   render(){
        return html`<h1>Header Main Title</h1>`;
   }
}
