class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url = "https://api.exchangeratesapi.io/v1/latest?access_key=2145fc88497a1c7ed1812f0ccd54ae4a"
        this.amount = null
    }

    exchange() {


        fetch(this.url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    changeAmount() {
        this.amount = amount
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }
}