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


  reverseMessage(message) {
    return message ? message.split('').reverse().join('') : '';
  }

  render() {
    console.log(this.data);

    return html`
      <div>
        <style>
          :host {
            display: block;
            border:1px solid #f00;
          }
        </style>

        <p>The message is: "${this.message}"</p>

        <p>The reversed message is: "${this.reverseMessage(this.message)}"</p>
      </div>
    `;
  }
}

export {
  ExampleLit
}