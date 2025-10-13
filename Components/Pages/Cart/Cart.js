class Cart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            
                 <div class="cartCont">

      <div class="produtosHead">
        <strong>Produtos</strong>
        

      </div>

      <div class="tableHead">

        <strong>Nome</strong>
        <strong>Preço</strong>
        <strong>Ações</strong>
      </div>


      <div class="table">
        <div class="tableLinhas">

          <strong>Makrama</strong>
          <strong>Preço</strong>
          <strong>

            <div class="footerActions">
              <svg id="CartTrash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>

            </div>


          </strong>
        </div>

       

        

        



      </div>

    </div>
            
            








            <div class="cartTotal">

             <div class='cartTotalTitle'>
               <strong>Resumo</strong>
               
             </div>

              <div class='cartTotalSubtotal'>
               <strong>Subtotal</strong>
               <strong>R$,</strong>
             </div>
             
              <div class='cartTotalTotal'>
               <strong>Total</strong>
               <strong>R$,</strong>
             </div>

             <div class='cartTotalPix'>
               <strong>R$,</strong>
             </div>

             <button id='cartCheckout'>Finalizar Pedido</button>
             <button id='cartContinue'>Continuar Comprando</button>
        `
  }
}

customElements.define('main-cart', Cart)






