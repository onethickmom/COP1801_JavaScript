var serviceText
var service
var total
var tipAmount

//Service information, how was service and recommended tip amount in decimal form
serviceFunction = () =>  {
    serviceText = prompt("Please rate your service; great, ok, or poor").toLowerCase();

        if (serviceText == "great") {
        service = 0.20
    } else if(serviceText == "ok") {
        service = 0.15
    } else if(serviceText == "poor") {
        service = 0.10
        } else {
        service = 0.00
        window.alert('Please select a service option provided')
        return
    }
}

//Total amount, how much and ensuring it's a valid amount
totalFunction = () => {

    if (service == 0.00) {
        return
    } else {
        total = prompt("Please enter your total bill, between 5-500")
            if (total < 5 && total > 500) {
                window.alert("Please enter a valid amount.")
                return
            }
    }

}


//Calculate the tip amount and display recommended message
calculate = () =>  {
    if (service == 0.00) {
        return
    } else {
        tipAmount = total * service
        document.getElementById("results").innerHTML = "Your total was $" + total + ". The recommended tip for " + serviceText + " service is $" + tipAmount.toFixed(2) + "."
    }
}

// function calculate() {

//     let serviceText = prompt("Please rate your service; great, ok, or poor").toLowerCase();

//     /*convert service into recommended tip percentage */
//     if (serviceText == "great") {
//         service = 0.20
//     } else if(serviceText == "ok") {
//         service = 0.15
//     } else if(serviceText == "poor") {
//         service = 0.10
//     } else {
//         window.alert('Please select a service option provided')
//         return
//     }
    
//     let total = prompt("Please enter your amount between $5 and $500")

//     if (total >= 5 && total <= 500) {
//         /*calculate recommended tip with message */
//         let tipAmount = total * service

//         /*display results*/
//         document.getElementById("results").innerHTML = "Your total was " + total + ". The recommended tip for " + serviceText + " service is $" + tipAmount + "."
//     } else {
        
//         window.alert("Please enter a valid amount.")
//         return
//     }
// }



