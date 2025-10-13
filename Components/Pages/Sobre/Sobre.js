class Sobre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<div class='sobreCont'>
<strong class='sobreStrong'>
                Protótipo de E-Commerce desenvolvido com o auxílio<br></br> e o lecionamento da instituição de ensino Senac Americana 
           </strong>
           <strong class='sobreStrong1'>
                por Ryan Vieira Assumpção
           </strong>
            </div>
           
        </>
`

    }

} customElements.define('main-sobre', Sobre)