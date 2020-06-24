class Footer extends HTMLElement {

    constructor() {
        super();
        this.footerelement = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.footerelement.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;                           
                box-sizing: border-box;
            }
            .footer {
                display: block;
                height: 50px;
                width: 100%;
                background-image: linear-gradient(to left, #3dd8f5, #f53df4, #3dd8f5);
                background-size: 200%;
                color: white;                
                left: 0;
                bottom: 0;                
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);                
            }
            h4 {
                text-align: center;
                line-height: 50px;
                font-family: 'Roboto', sans-serif;
                font-weight: 100;                                                
            }
            a {
                color: white;
                text-decoration: none;
            }
        </style>
        <div class="footer">
            <h4>Copy right 2020 <a target="_blank" href="https://www.instagram.com/setyo_awan/?hl=tl">sap movie</a></h4>            
        <div>
       `;
    }
}

customElements.define("foo-ter", Footer);