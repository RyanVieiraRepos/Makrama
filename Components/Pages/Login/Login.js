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
                            <button>Login</button>
                            <strong>Não possui uma conta ?</strong>
                            <strong>Esqueci a minha senha</strong>
                        </div>

                        
                    </form>
    `
    }
} customElements.define('main-login', Login)