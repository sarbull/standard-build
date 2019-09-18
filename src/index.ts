import { ExampleTag } from './example-tag';
import { ExampleLit } from './example-lit';

customElements.define(ExampleLit.is, ExampleLit);
customElements.define(ExampleTag.is, ExampleTag);

console.log(ExampleTag);
console.log(ExampleLit);
