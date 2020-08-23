import { html, css, LitElement } from 'lit-element';

export class Center extends LitElement {
  static get tag() {
    return 'trax-sb-center';
  }

  static get styles() {
    return css`
    :host {
      display: grid;
      place-items: center;

      position: absolute;
      width: 100%;
      height: 100%;
    }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get(Center.tag)) { customElements.define(Center.tag, Center); }

export function center(storyFn) {
  return html`<trax-sb-center>${storyFn()}</trax-sb-center>`;
}
