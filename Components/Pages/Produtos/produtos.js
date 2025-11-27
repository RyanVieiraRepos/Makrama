class Produtos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class='product' id='product'>
         <img src='../../../images/enfeite1.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>

        <div class='product' id='product'>
         <img src='../../../images/enfeite2.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>

        <div class='product' id='product'>
         <img src='../../../images/suporte1.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>

        <div class='product' id='product'>
         <img src='../../../images/suporte2.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>

        <div class='product' id='product'>
         <img src='../../../images/enfeite1.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>

        <div class='product' id='product'>
         <img src='../../../images/enfeite2.jpeg'/>
         <strong>descrição</strong>
         <strong>preço</strong>
        </div>
        

`
        console.log('produtos')
    }


} customElements.define('main-produtos', Produtos)