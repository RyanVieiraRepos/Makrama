  //login redirect
        let login = document.getElementById("loginContainer")

        login.addEventListener('click', function redirect() {
            window.location.href = '../Pages/login/login.html'
        });


        //product redirect
        let product = document.getElementById("product")

        product.addEventListener('click', function redirect() {
            window.location.href='../Pages/produtos/produto1/produto1.html'
        })


        //whatsapp redirec
        let whats = document.getElementById("whats")
        whats.addEventListener('click', function redirect() {
            window.location.href='https://web.whatsapp.com'
        })

        //insta redirect
         let insta = document.getElementById("insta")
        insta.addEventListener('click', function redirect() {
            window.location.href='https://www.instagram.com/'
        })

