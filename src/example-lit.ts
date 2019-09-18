const { LitElement, html } = require('lit-element');

class ExampleLit extends LitElement {
  static get is() {
    return 'example-lit';
  }

  static get properties() {
    return {
      message: {
        type: String
      },
      data: {
        type: Array
      }
    };
  }

  render() {
    console.log(this.data);

    return html`
      <div>
        <p>The message is: "${this.message}"</p>

        <p>The reversed message is: "${this.reverseMessage(this.message)}"</p>

        ${this.data.map((el) => {
          return `${el} `;
        })}
      </div>
    `;
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }
}

customElements.define(ExampleLit.is, ExampleLit);

export {
  ExampleLit
}