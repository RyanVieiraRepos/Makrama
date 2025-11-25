class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form class="loginForm" action="/">
                        <strong class="loginTitle">Login</strong>

                        <input
                            type="text"
                            id="loginEmail"
                            placeholder="E-Mail"
                            required
                        />
                        

                        <input
                            type="password"
                            id="loginSenha"
                            placeholder="Senha"
                            required
                        />
                        

                        <div class="loginButtons">
                            <button id='loginButton'>Login</button>
                            <strong id='noAccount'>Não possui uma conta ?</strong>
                            <strong id='loginLoss'>Esqueci a minha senha</strong>
                        </div>

                        
                    </form>
    `
        document.getElementById('noAccount').addEventListener('click', () => {
            document.getElementById("layout").innerHTML = `
        <main-cad></main-cad>
        `
        })
    }

} customElements.define('main-login', Login)


document.getElementById('loginButton').addEventListener('click', () => {
    alert('click')
})