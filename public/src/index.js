
import './components/postUp/postUp.js'
import './components/contador/contador.js'
import data from './components/postUp/data.js'
class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const compts = data.map(({image, personaluser,location, peoplelikes, publiccoments}) =>
        `
       <my-postUp
       image="${image}"
       personaluser="${personaluser}"
       location="${location}"
       peoplelikes="${peoplelikes}"
       publiccoments="${publiccoments}"
       ></my-postUp>
      
        `);
        this.shadowRoot.innerHTML=
        compts.join();
    }
}

customElements.define('my-container', AppContainer);

