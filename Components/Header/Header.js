class Header extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <div class="headerCont">

        <strong id="headerLogo">Makrama</strong>

        <div style="display: flex;  flex-direction: row" id='headerNav'>

          <a id="headerHome">Home</a>
          <a id="headerProdutos">Produtos</a>
          <a id="headerSobre">Sobre</a>
          <a id="headerDash">Dashboard</a>
        </div>



        <div style="display: flex; flex-direction: row; ">
           <img id='headerCart' src='./Components/Header/icons/cart.png'> 
           <img id='headerLogin' src='./Components/Header/icons/person.png'> 
           <img id='sidebar' src='./Components/Header/icons/list.png'> 
        </div>
        `
  }
}







customElements.define("main-header", Header)



