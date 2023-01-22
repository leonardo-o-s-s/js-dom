/*
Com essa estrutura base criada, você precisará vincular uma função ao evento de submissão do formulário. 
A função vinculada deverá pegar o valor informado nos campos nome 
e data de nascimento e imprimi-los no console. 
*/
const botao = document.getElementById("enviar")
const valores = []

botao.addEventListener("click", (evento) => {
    const nome = document.querySelector("#nome").value
    const dataNascimento = document.querySelector("#data-nascimento").value
    evento.preventDefault()
    console.log(nome)
    console.log(dataNascimento)
})


// function mensagem(pessoa, nascimento) {
//     alert(`Olá ${pessoa}, sua data de nascimento é: ${nascimento}`)
// }