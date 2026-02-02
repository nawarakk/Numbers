//Seleciona os elementos do formulário
const form = document.querySelector("form")
const number = document.getElementById("number")
const from = document.getElementById("from")
const to = document.getElementById("to")
const repeat = document.getElementById("chk")
const result = document.createElement("span")
const right = document.querySelector(".right")
result.classList.add("result")


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

    //Condição que garante que o espaço de intervalo exista
    if (raffle.from > raffle.to) {
        alert("O valor inicial deve ser menor que o valor final do intervalo.")
        return
    }

    //Condição que garente que a quantidade de números sorteados não será maior que o intervalo escolhido
    if (raffle.repeat === true && raffle.number > (raffle.to - raffle.from + 1)) {
        alert("Quantidade inválida: o intervalo não possui números suficientes para o sorteio.")
        return
    }

    raffleAdd(raffle)
}


function raffleAdd(raffle) {
    try {
       form.remove()

       //Cria a area de resultado
       const area = document.createElement("div")
       area.classList.add("result-area")

       const title = document.createElement("h2")
       title.textContent = `Resultado do sorteio`

       const subTitle = document.createElement("p")
       subTitle.textContent = `1º Resultado`

       const numberResult = document.createElement("div")
       numberResult.classList.add("number-result")

       const animationNumber = document.createElement("div")
       animationNumber.classList.add("animation-number")

       const button = document.createElement("button")
       button.innerHTML = `
       Sortear novamente
       <img src="assets/icons/back.svg" alt="Ícone de voltar">`

        area.append (title, subTitle, numberResult, button)
        numberResult.appendChild(animationNumber)
        right.append(area)

    } catch (error) {
        alert("Não foi possivel realizar o sorteio.")
        console.log(error)
    }
}