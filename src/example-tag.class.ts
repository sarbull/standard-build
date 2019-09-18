class ExampleTag extends HTMLElement {
  message: string = 'Lorem ipsum dolor.';

  static get is(): string {
    return 'example-tag';
  }

  constructor() {
    super();

    this.attachShadow( { mode: 'open' } );
    this.shadowRoot.innerHTML = this.render();

    console.log('constructor()');
  }

  connectedCallback() {
    console.log('connectedCallback()');
  }

  static get observedAttributes() {
    return ['message'];
  }

  render() {
    return `
      <div id="example-tag">
        <p>My example-tag component contains: <slot></slot>.</p>
        <p>Message is: ${this.getAttribute('message') || this.message}</p>
      </div>
    `;
  }
}

window.customElements.define(ExampleTag.is, ExampleTag);

export {
  ExampleTag
}