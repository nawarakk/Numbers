//Seleciona os elementos do formulário
const form = document.querySelector("form")
const number = document.getElementById("number")
const from = document.getElementById("from")
const to = document.getElementById("to")
const repeat = document.getElementById("chk")

//Captura o evento de input para aceitar apenas números
number.oninput = () => {
    let value = number.value.replace(/\D/g, "")
    number.value = value
}

from.oninput = () => {
    let value = from.value.replace(/\D/g, "")
    from.value = value
}

to.oninput = () => {
    let value = to.value.replace(/\D/g, "")
    to.value = value
}

//Captura o evento de submit do fomulário para obter os valores.
form.onsubmit = (event) => {
    event.preventDefault()

    const raffle = {
        number: number.value,
        from: from.value,
        to: to.value,
        repeat: repeat.checked,
    }

}
