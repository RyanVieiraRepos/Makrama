class Sobre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<div class='sobreCont'>
  <strong class='aboutTitle'>
        O que fazemos 
  </strong>
           
            </div>
           
        </>
`

    }

} customElements.define('main-sobre', Sobre)