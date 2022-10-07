class MyCounter extends HTMLElement {
    static get observedAttributes() {
        return ['count']
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        })
        this.increaseCount = this.increaseCount.bind(this)
    }

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.removeEventListener();
    }
    mount() {
        this.render();
        this.addEventListener()
    }

    addEventListener() {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', this.increaseCount);
    }

    removeEventListener() {
        const button = this.shadowRoot.querySelector('button');
        button = this.removeEventListener('click', this.increaseCount);
    }

    increaseCount() {
        const value = Number(this.getAttribute('count')) || 0;
        this.setAttribute('count', value +1) 
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/contador/style.css">
        <section>
            <h1>${this.count || 0 }</h1>
            <button class="like"><img src="./assets/like.png" width="20"></button>
        </section>   `
    }
}
customElements.define('my-counter', MyCounter);
export default MyCounter;