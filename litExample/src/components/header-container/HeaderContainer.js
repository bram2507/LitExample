import { LitElement, html, css  } from "lit";

export class HeaderContainer extends LitElement{
    static styles = css`
    :hot {
    }
   `;
   static properties = {};
   constructor(){
    super();
   }
    render(){
        return html`
        <div>Hello container<div>
        `;
    };
}