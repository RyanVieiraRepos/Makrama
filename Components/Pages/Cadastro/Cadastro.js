class Cadastro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="cad">
      <form action="/" method="POST" class="cadForm">


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
          <input type="submit" value="Cadastre-se" class="cadSubmit" />
          <strong class="cadStrong">Já possui uma conta ?</strong>
        </div>
      </form>

    </div>
        `
  }
} customElements.define('main-cad', Cadastro)