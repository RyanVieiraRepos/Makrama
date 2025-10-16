class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form class="loginForm" action="/">
                        <strong class="loginTitle">Login</strong>

                        <input
                            type="text"
                            id="email2"
                            name="email2"
                            className="input2"
                            placeholder="E-Mail"
                            required
                        />
                        

                        <input
                            type="password"
                            id=""
                            name=""
                            
                            placeholder="Senha"
                            required
                        />
                        

                        <div class="loginButtons">
                            <strong>Login</strong>
                            <strong>Não possui uma conta ?</strong>
                        </div>

                        
                    </form>
    `
    }
} customElements.define('main-login', Login)