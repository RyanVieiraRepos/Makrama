class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="loginForm">
                        <strong class="loginTitle">Login</strong>

                        <input
                            type="text"
                            id="loginEmail"
                            placeholder="E-Mail"
                            
                        />
                        

                        <input
                            type="password"
                            id="loginSenha"
                            placeholder="Senha"
                            
                        />
                        

                        <div class="loginButtons">
                            <button id='loginButton'>Login</button>
                            <strong id='noAccount'>Não possui uma conta ?</strong>
                            <strong id='loginLoss'>Esqueci a minha senha</strong>
                        </div>

                        
                    </div>
    `
        document.getElementById('noAccount').addEventListener('click', () => {
            document.getElementById("layout").innerHTML = `
        <main-cad></main-cad>
        `
        })







  const BtnLogin = document.getElementById('loginButton')
  

  function ifEmpty(email,senha){
    
    if(!email || !senha){
       
       BtnLogin.classList.add('shake-element')
       setInterval(()=>{
        BtnLogin.classList.remove('shake-element')
       },500)
    }else{
        FecthLogin(email,senha)
    }

  }

  function FecthLogin(email,senha){
       console.log(email + senha)
  } 
  



  BtnLogin.addEventListener('click',()=>{
    const InputEmail = document.getElementById('loginEmail').value
    const InputSenha = document.getElementById('loginSenha').value
    ifEmpty(InputEmail,InputSenha)
  })

    }

} customElements.define('main-login', Login)

