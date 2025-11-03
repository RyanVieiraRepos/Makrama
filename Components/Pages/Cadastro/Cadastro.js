class Cadastro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="cad">
        
      <form action="/" method="POST" class="cadForm">
      


      <div id='cadHeader'>
       <strong>Cadastro</strong>
       <svg xmlns="http://www.w3.org/2000/svg" fill="black" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
         <path
             d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z">
         </path>
     </svg>
      </div>
        <input type="text" id="nome" name="nome" placeholder="Nome" required class="cadInput" />
        <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome" required class="cadInput" />



        <input type="text" id="email" name="email" placeholder="E-mail" required class="cadInput" />
        <input type="password" id="password" name="password" placeholder="Senha" required class="cadInput" />



        <input type="number" id="cep" name="cep" placeholder="CEP" required pattern="\d{5}-\d{3}" class="cadInput" />
        <input type="number" id="numero" name="numero" placeholder="Número" required class="cadInput" />



        <input type="tel" id="celular" name="celular" class="cadCelular" placeholder="Celular" required
          pattern="\d{5}-\d{3}" class="cadInput" />



        <input class="cadDate" id="date" name="date" type="date" Data de nascimento class="cadInput" />



        <div class="cadButtonsCont">
          <input type="submit" value="Cadastrar" class="cadSubmit" />
          <strong class="cadStrong" id='gotAccount'>Já possui uma conta ?</strong>
        </div>
      </form>

    </div>
        `



    document.getElementById('gotAccount').addEventListener('click', () => {
      document.getElementById('layout').innerHTML = `
  <main-login></main-login>
  `
    })
  }
}



customElements.define('main-cad', Cadastro)

