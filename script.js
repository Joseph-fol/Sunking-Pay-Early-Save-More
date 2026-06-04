document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear()
    document.getElementById("currentYear").innerHTML = year

    const calculator = document.getElementById("calculate")

    calculator.addEventListener('click', () => {
        const currentDate = document.getElementById("currentDate")
        const planOfPayment = document.getElementById("paymentPlan")
        const selected = document.getElementById("categorySelect")

        const purchaseDate = currentDate.value
        const plan = planOfPayment.value
        const selectValue = selected.value

        if (purchaseDate == "" || plan == "") {
            alert("Input cannot be empty. Please fill in the Purchase Date and Payment Plan.")
            return
        }

        if (selectValue == " ") {
            alert("Please select a Product Category.")
            return
        }

        displayResult()

    })
})

window.clearAllInputs = function() {
    document.getElementById("paymentPlan").value = ""
    document.getElementById("categorySelect").value = ""
    document.getElementById("productSelect").value = ""
    document.getElementById("currentDate").value = ""

    
    document.getElementById("alertReset").style.display = "block"
    setTimeout(() => {
        document.getElementById("alertReset").style.display = "none"
    }, 2000)
    
    document.getElementById("alertResult").style.display = "none"
}



function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00')
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
}

function displayResult() {  
    const currentDate = document.getElementById("currentDate")
    const purchaseDate = document.getElementById("purchaseDate")
    
    const userPurchaseDate = currentDate.value
    const formattedDate = formatDate(userPurchaseDate)

    document.getElementById("alertResult").style.display = "block"
    purchaseDate.innerHTML = formattedDate
}