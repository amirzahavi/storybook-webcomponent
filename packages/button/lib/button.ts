import { LitElement, html,  customElement, property } from 'lit-element';
import scss from './button.scss';
import baseScss from "../../../assets/scss/base.scss";

export const TAG_NAME = 'trax-button';

@customElement(TAG_NAME)
export default class Button extends LitElement {

  @property({type: Boolean})
  disabled: boolean;

  @property({type: Boolean})
  secondary: boolean

  @property({type: Boolean})
  link: boolean

  // static get styles() {
  //   return css`
  //     :host {
  //       width: fit-content;

  //       --background-idle: #7a3db3;
  //       --background-hover: #592c82;
  //       --background-press: #592c82;
  //       --backround-disabled: #d4c1e6;

  //       --border-idle: #7a3db3;
  //       --border-hover: #592c82;
  //       --border-press: #592c82;
  //       --border-disabled: #d4c1e6;

  //       --text-idle: red;
  //       --text-hover: #fff;
  //       --text-press: #fff;
  //       --text-disabled: #fff;

  //       --font-size: 13px;
  //     }

  //     .button {
  //       display: inline-flex;
  //       align-items: center;
  //       justify-content: center;
  //       position: relative;
  //       white-space: nowrap;
  //       font-size: var(--font-size);
  //       border-radius: 3px;
  //       padding: 9px 15px;
  //       user-select: none;
  //       color: var(--text-idle);
  //       background-color: var(--background-idle);
  //       border: 1px solid var(--border-idle);
  //     }

  //     .button:hover {
  //       color: var(--text-hover);
  //       background-color: var(--background-hover);
  //       border-color: var(--border-hover);
  //     }

  //     .button:active {
  //       color: var(--text-press);
  //       background-color: var(--background-press);
  //       border-color: var(--border-press);
  //     }
  //   `;
  // }

  static get styles() {
    return [baseScss, scss];
  }

  render() {
    return html`
      <div class="button pointer"
          ?disabled="${this.disabled}"
          ?secondary="${this.secondary}"
          ?link="${this.link}">
          <slot></slot>
      </div>
    `;
  }
}
