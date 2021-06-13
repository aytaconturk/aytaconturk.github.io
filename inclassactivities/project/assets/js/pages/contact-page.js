$(document).ready(function () {

    // Input, Select, Textarea validations except submit button
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

    // Change navbar active class dynamically
    $('#nvbCollapse').dynamicMenu();

    <!-- (Jquery UI Widget) - Date picker -->
    $(".datepicker").datepicker({
        weekStart: 1,
        format: 'dd/mm/yyyy'
    });

    var requestURL = 'https://api.exchangerate.host/latest?base=TRY';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var response = request.response;
        console.log(response);
        const eur = 1/response.rates.EUR;
        const usd = 1/response.rates.USD;
        console.log(eur)
        console.log(usd)

        $("#currency-dollar span").text(usd.toFixed(4));
        $("#currency-euro span").text(eur.toFixed(4));
    }
});
