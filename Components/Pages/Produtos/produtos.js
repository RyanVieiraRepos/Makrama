class Produtos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <button>
      <img>

       <strong>Nome</strong>

       <strong>Descrição</strong>
       <strong>Preço</strong>
    </button>
    
    
    
`
        console.log('produtos')
    }





} customElements.define('main-produtos', Produtos)