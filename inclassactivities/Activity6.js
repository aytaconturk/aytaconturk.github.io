
function Calculate(){
    let y = document.getElementById("currencyFrom").value;
    let z = document.getElementById("currencyTo").value;

    let x = document.getElementById("from");


    let toValue = document.getElementById("to");

    if (x == "") {
        x.value = 0;
    }

    if (toValue == "") {
        document.getElementById("from").value = 0;
    }

    switch(true){
        case (y === "USD" && z === "USD"):
            toValue.value = x.value;
            break;

        case (y === "USD" && z === "CAD"):
            toValue.value = x.value * 1.25;
            break;

        case (y === "USD" && z === "EUR"):
            toValue.value = x.value * 0.83;
            break;

        case (y === "CAD" && z === "USD"):
            toValue.value = x.value * 0.80;
            break;

        case (y === "CAD" && z === "CAD"):
            toValue.value = x.value;
            break;

        case (y === "CAD" && z === "EUR"):
            toValue.value = x.value * 0.67;
            break;

        case (y === "EUR" && z === "USD"):
            toValue.value = x.value * 1.20;
            break;

        case (y === "EUR" && z === "CAD"):
            toValue.value = x.value * 1.50;
            break;

        case (y === "EUR" && z === "EUR"):
            toValue.value = x.value;
            break;
    }




}