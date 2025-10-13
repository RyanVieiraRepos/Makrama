class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="main2">
                <div class="mainLogin2">
                    <strong class="titleStrong2">Login</strong>

                    <form classN="form2" action="/">
                        <input
                            type="text"
                            id="email2"
                            name="email2"
                            className="input2"
                            placeholder="E-Mail"
                            required
                        />
                        <div class="line2"></div>

                        <input
                            type="password"
                            id="senha2"
                            name="senha2"
                            className="input12"
                            placeholder="Senha"
                            required
                        />
                        <div class="line2"></div>

                        <div class="loginButton2" id="loginButton2">
                            <div class="spacer2"></div>
                            <strong class="buttonStrong2">Login</strong>
                        </div>

                        <div class="cont2">
                            <Link to='/Cadastro' class="signin2"><strong>Não possui uma conta ?</strong></Link>
                        </div>
                    </form>
                </div >
            </div >
    `
    }
} customElements.define('main-login', Login)