class Produtos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class='product' id='product'>
         <img src='../../../images/enfeite1.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>
        

`
        console.log('produtos')
    }


} customElements.define('main-produtos', Produtos)