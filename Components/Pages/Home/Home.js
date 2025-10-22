// crio a classe Header ( uma função voltada à objetos), que herda, portanto, permite a utilização de todos os métodos e propriedades js, que foram criados com c++ ou rust ( código do navegador) e exportados para o javascript entender ao linkar o src do script no html



//o connectedCallback() identifica quando o elemento criado, é inserido no html - <Header/>
//e dentro dele eu insiro o conteudo html, com ids, classes, etc...

//o this, referencia ao objeto criado ( Header )

class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="homeCont">
          <div class="homeText">
            <strong>Artesanais que encantam!</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
          cursus metus. Quisque sed rhoncus nisi. Mauris quis tincidunt augue.
          Proin in ante turpis. Aenean interdum tellus sed nibh fringilla
          ullamcorper. Aenean nec quam non felis iaculis euismod mollis non
          augue. Etiam facilisis pretium nulla tincidunt finibus. Praesent
          mattis dignissim lacinia. Cur.
        </p>

            <button type="button" id="homeButton">
            Navegar!</button>
      </div>
      <div class="homeImage">
        <img src="./Components//Pages/Home/images/aiWp.png" />

      </div>
    </div>
`;


    document.getElementById('homeButton').addEventListener('click', () => {
      document.getElementById('layout').innerHTML = `
  <main-produtos><main-produtos>
  `

      console.log(document.getElementById('homeButton'))
    })











  }
} customElements.define("main-home", Home);



