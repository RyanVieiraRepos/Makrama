class Produtos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="produtosCont">
           
           <div class="produtosHead">
               <strong>Produtos</strong>
                   <div class="produtosSearchCont">
                       <input placeholder="Pesquise" >
                       <button>Adicionar Produtos</button>
                       <select>
                          <option>Filtrar por</option>
                          <option>Ordem Alfabética</option>
                          <option>Quantidade de Pedidos</option>
                       </select>
                       

                       
                   </div>

           </div>
        
       
          <div class="table">

            <div class="tableHead">
                <strong>#</strong>
            </div>       
             </div>
         
           </div>
        `
    }
} customElements.define("main-produtos", Produtos)