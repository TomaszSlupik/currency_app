
const amountOne = document.querySelector('.amount-one')
const currencyOne = document.querySelector('#currency-one')
const amountTwo = document.querySelector('.amount-two')
const currencyTwo = document.querySelector('#currency-two')
const btn = document.querySelector('.swap')
const info = document.querySelector('.rate-info')

const calculate = (params) => {
    fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
        .then(res => res.json())
        .then(data => {
            const cur1 = currencyOne.value
            const cur2 = currencyTwo.value

            const rate = data.rates[cur2]
            info.textContent = `1 ${cur1} = ${rate.toFixed(4)} ${cur2}`
            amountTwo.value = (amountOne.value * rate).toFixed(2)

        })
}

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)

calculate()



const changePlace = () => {
   const currencyOneOld = currencyTwo.value 
    currencyTwo.value = currencyOne.value
    currencyOne.value = currencyOneOld
    calculate()
}



btn.addEventListener('click', changePlace)




