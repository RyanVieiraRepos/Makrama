function redirect(button, element) {
    button.addEventListener("click", () => {
        document.getElementById("layout").innerHTML = `
    <${element}></${element}>
    `
    })
}


//HEADER
redirect(document.getElementById("headerLogo"), "main-home")

redirect(document.getElementById("headerHome"), 'main-home')
redirect(document.getElementById("headerProdutos"), 'main-produtos')
redirect(document.getElementById("headerSobre"), 'main-sobre')


redirect(document.getElementById("headerCart"), 'main-cart')
redirect(document.getElementById("headerLogin"), 'main-login')





//FOOTER

redirect(document.getElementById('footerHome'), 'main-home')
redirect(document.getElementById('footerSobre'), 'main-sobre')
redirect(document.getElementById('footerLogin'), 'main-login')
redirect(document.getElementById('footerCad'), 'main-cad')


//DASHBOARD

function DashNavRedirect(button,element,element2) {
    button.addEventListener("click", () => {
        document.getElementById("layout").innerHTML = `
    <${element}></${element}>
    <${element2}></${element2}>
    `,console.log(element2)
    })  
}


DashNavRedirect(document.getElementById("headerDash"),'main-dash','dash-produtos')
DashNavRedirect(document.getElementById("dashProdutosBtn"),'main-dash','dash-produtos')
DashNavRedirect(document.getElementById("dashClientesBtn"),'main-dash','dash-clientes')
DashNavRedirect(document.getElementById("dashPedidosBtn"),'main-dash','dash-pedidos')



//Login

redirect(document.getElementById(""),'main-cadastro')