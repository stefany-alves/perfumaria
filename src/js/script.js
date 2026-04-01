const adicionar = document.querySelectorAll(".adicionarCarrinho")
const carrinho = document.getElementById("itensCarrinho")
const comprar = document.getElementById("comprarPerfumes")

adicionar.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDefault()

        const produtoDiv = botao.closest(".produto")
        const tituloPerfume = produtoDiv.querySelector(".tituloPerfume").textContent
        const imgSrc = produtoDiv.querySelector("img").src

        const itemCar = document.createElement("div")
        itemCar.classList.add("itemCarrinho")

        // checkbox
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("perfumeCarrinho")

        // nome
        const textoCarrinho = document.createElement("span")
        textoCarrinho.textContent = tituloPerfume
        textoCarrinho.classList.add("tituloCarrinho")

        // imagem
        const img = document.createElement("img")
        img.src = imgSrc
        img.width = 50

        // botão remover
        const btnRemover = document.createElement("button")
        btnRemover.textContent = "Remover"
        btnRemover.classList.add("removerItem")

        btnRemover.addEventListener("click", () => {
            itemCar.remove()
        })

        itemCar.appendChild(checkbox)
        itemCar.appendChild(textoCarrinho)
        itemCar.appendChild(img)
        itemCar.appendChild(btnRemover)

        carrinho.appendChild(itemCar)
    })
})

comprar.addEventListener("click", () => {
    const itens = carrinho.querySelectorAll(".itemCarrinho")
    let selecionados = []

    itens.forEach((item) => {
        const checkbox = item.querySelector(".perfumeCarrinho")
        const titulo = item.querySelector(".tituloCarrinho").textContent

        if (checkbox.checked) {
            selecionados.push(titulo)
        }
    })

    if (selecionados.length > 0) {
        alert("Você comprou: " + selecionados.join(", "))
        
        // 🔥 LIMPA O CARRINHO
        carrinho.innerHTML = ""
    } else {
        alert("Selecione pelo menos um produto!")
    }
})
