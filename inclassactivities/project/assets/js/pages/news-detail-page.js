// Execute those scripts when page loaded and ready
$(document).ready(function () {
    // Social Share Bar Jquery Plugin
    $(".container").floatingSocialShare({
        buttons: [
            "facebook", "linkedin", "twitter", "telegram", "whatsapp"
        ],
        text: "share with: "
    });

    // Input, Select, Textarea validations except submit button
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

    <!-- (Jquery UI Widget) - Date picker -->
    $(".datepicker").datepicker({
        weekStart: 1,
        format: 'dd/mm/yyyy'
    });

    // Change navbar active class dynamically
    $('#nvbCollapse').dynamicMenu();

    // auto type and delete news headings
    $("#news-coding").typed({
        strings: [
            "<strong>Türk F-16’ları </strong> Akdeniz Üzerinde Görev İcra Eden B-52’ye Eşlik Etti",
            "Norveç ile Hollanda dan <strong>Thales GM 200 MM/C</strong> Radar anlaşması ",
            "Coşkunöz’den <strong>İHA</strong> eğitimleri için yeni ortaklık",
            "Ukrayna hizmet dışındaki Sukhoi <strong>Su-24</strong> uçağını kullanıma aldı",
            "<strong>Roketsan’dan</strong> İSO 500’de dikkat çekici yükseliş",
            "BAE’nin Çin İle Gelişen Askeri Bağları <strong>F-35</strong> Alımını Etkiliyor"
        ],
        contentType: 'html',
        typeSpeed: 20,
        startDelay: 500,
        backSpeed: 0,
        loop: true,
        loopCount: false
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
