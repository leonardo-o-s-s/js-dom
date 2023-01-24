const botao = document.getElementById("enviar")
const form = document.getElementById("form")
const itens = JSON.parse(localStorage.getItem("itens")) || []

botao.addEventListener("click", (evento) => {
    const nome = document.querySelector("#nome").value
    const dataNascimento = document.querySelector("#data-nascimento").value
    // evento.preventDefault()
    console.log(nome)
    console.log(dataNascimento)
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nomeForm = event.target.elements["nome"]
    const dataForm = event.target.elements["data-nascimento"]
    const itensStorage = {
        "nome": nomeForm.value,
        "data-nascimento": dataForm.value
    }

    console.log(event)
    console.log(nomeForm)
    console.log(dataForm)

    localStorage.setItem("itens", JSON.stringify(itensStorage))
})