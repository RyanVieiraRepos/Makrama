function redirect(button, element) {
    button.addEventListener("click", () => {
        document.getElementById("layout").innerHTML = `
    <${element}></${element}>
    `
    })
}


//HEADER
logo = document.getElementById("headerLogo")

home = document.getElementById("headerHome")
products = document.getElementById("headerProdutos")
sobre = document.getElementById("headerSobre")

cart = document.getElementById("headerCart")
login = document.getElementById("headerLogin")


redirect(logo, "main-home")

redirect(home, 'main-home')
redirect(products, 'main-produtos')
redirect(sobre, 'main-sobre')


redirect(cart, 'main-cart')
redirect(login, 'main-login')



dash = document.getElementById("headerDash")
dash.addEventListener("click", () => {
    document.getElementById("layout").innerHTML = `
    <main-dash></main-dash><dash-produtos></dash-produtos>
    `
})

//FOOTER

