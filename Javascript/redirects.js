function redirect(button, element) {

    button.addEventListener("click", () => {
     document.getElementById("layout").innerHTML = `
    <${element[1]}></${element[1]}>
    `

    })

}


//HEADER
let logo = [document.getElementById("headerLogo"), "main-home"]

let home = document.getElementById("headerHome")
let products = document.getElementById("headerProdutos")
let sobre = document.getElementById("headerSobre")

let cart = document.getElementById("headerCart")
let login = document.getElementById("headerLogin")




redirect(logo[0],logo[1])

/*home[0].addEventListener("click", redirect(home))
products[0].addEventListener("click", redirect(products))
sobre[0].addEventListener("click", redirect(sobre))

cart[0].addEventListener("click", redirect(cart))
login[0].addEventListener("click", redirect(login))*/
