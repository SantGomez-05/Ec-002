class MyPostUp extends HTMLElement {

    static get observedAttributes (){
        return ['image', 'peoplelikes', 'location','personaluser', 'publiccoments']
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/postUp/style.css">
        <section id="template">
        
        <img id="like" src="./assets/like.png">
        <img id="comment" src="./assets/comment.png">
        <img id="message" src="./assets/message.png">
        <img id="profile" src="./assets/profile.png">
        <img id="puntos-ubicacion-imagen" src="./assets/puntos-ubicacion-imagen.jpeg">
        <img id="puntos-opciones" src="./assets/puntos-opciones.jpeg">
        <img id="save" src="./assets/save.jpeg">
        <h1 id="personaluser">${this.personaluser}</h1>
        <h1 id="location">${this.location}</h1>
        <h1 id="peoplelikes">${this.peoplelikes}</h1>
        <h1 id="publiccomments">${this.publiccoments}</h1>
        <img id="image" src="${this.image}"></img>
        <my-counter></my-counter>
        </section>
        `
    }
    
}
//user: SantGomez5
//description: #Cityforever
//likes: 122
//comments: thats right

customElements.define("my-postup", MyPostUp)
export default MyPostUp