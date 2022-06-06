function calculate() {

    let serviceText = prompt("Please rate your service; great, ok, or poor").toLowerCase();

    /*convert service into recommended tip percentage */
    if (serviceText == "great") {
        service = 0.20
    } else if(serviceText == "ok") {
        service = 0.15
    } else if(serviceText == "poor") {
        service = 0.10
    } else {
        window.alert('Please select a service option provided')
        return
    }
    
    let total = prompt("Please enter your amount between $5 and $500")

    if (total >= 5 && total <= 500) {
        /*calculate recommended tip with message */
        let tipAmount = total * service

        /*display results*/
        document.getElementById("results").innerHTML = "Your total was " + total + ". The recommended tip for " + serviceText + " service is $" + tipAmount + "."
    } else {
        
        window.alert("Please enter a valid amount.")
        return
    }
}