

let buton = document.getElementById("buton")
let select = document.getElementById("select-moedas")

async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta){

        return resposta.json()
    })
let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high
console.log(dolar)
console.log(euro)
    let inputvaloremReais = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")

    if (select.value === "US$ Dólar americano") {
        let valorEmDólares = inputvaloremReais / dolar
        inputmoedas.innerHTML = valorEmDólares.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    if (select.value === "€ Euro") {
        let valorEmEuros = inputvaloremReais / euro
        inputmoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    }

    inputReal.innerHTML = inputvaloremReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

}
//essa função e responsavel por trocar a bandeira e os nome das moedas
function trocaDeMoeda() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar americano") {
        textomoedas.innerHTML = "Dólar americano"
        bandeiramoedas.src = "./img/uss.png"

    }
    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./img/euro.png"
    }
    convertermoedas()
}
buton.addEventListener("click", convertermoedas)
select.addEventListener("change", trocaDeMoeda)



