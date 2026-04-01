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

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("perfumeCarrinho")

        const textoCarrinho = document.createElement("span")
        textoCarrinho.textContent = tituloPerfume
        textoCarrinho.classList.add("tituloCarrinho")

        const img = document.createElement("img")
        img.src = imgSrc
        img.width = 50

        itemCar.appendChild(checkbox)
        itemCar.appendChild(textoCarrinho)
        itemCar.appendChild(img)

        carrinho.appendChild(itemCar)
    })
})

comprar.addEventListener("click", () => {
    const checkBoxes = carrinho.querySelectorAll(".perfumeCarrinho")
    const titulosCarrinho = carrinho.querySelectorAll(".tituloCarrinho")

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            alert("Você escolheu: " + titulosCarrinho[i].textContent)
        }
    }
})
