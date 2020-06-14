class Navbar extends HTMLElement {
    
    constructor() {
        super();
        this.navBar = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.navBar.innerHTML = `
        <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: white;
               color: #72c12c;
           }
           .container {
                width: 80%;
                margin: auto;
            }
            .container h2 {
                padding: 15px;
               font-family: 'Amiri', serif;
               font-size: 27px;
               color:#72c12c;
           }
       </style>
       <div class="container">
            <h2>MyQur'an</h2>
       </div>
       `;
    }
}

customElements.define("nav-bar", Navbar);