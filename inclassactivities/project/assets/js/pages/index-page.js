// Execute those scripts when page loaded and ready
$(document).ready(function () {

    <!-- (Jquery Plugin) - Owl Carousel Slider -->
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        dots: false,
        stagePadding: 30,
        smartSpeed: 450,
        autoHeight: false,
        navigation: true,
        navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    });

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



    const url = `./assets/json/news.json`;
    const page = 1;
    let news = "";

    // page first open load those news into 1th page
    $.getJSON(url, data => {
        news =  data.news[page];
        document.querySelector('.news-container').innerHTML = "";
        showNews(news);
    });

    // on click pagination any of link get this page's news
    $(".pagination a").click(function() {
        console.log($(this).text())
        const page = $(this).text();

        document.querySelector('.news-container').innerHTML = "";
        $.getJSON(url, data => {
            console.log(data.news[page]);
            news =  data.news[page];
            showNews(news);
        });

        $(".pagination .page-item").removeClass("active");
        $(this).parent().addClass("active");

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

function showNews(news) {
    let i = 0;
    news.forEach(data => {
        if(i === 3)
            i = 0;
        if(i === 0) {
            document.querySelector('.news-container').insertAdjacentHTML('beforeend', '<div class="row news-row"></div>');
        }

        $('.news-row:last').append(
            `
             <div class="col-md-4">
                <div class="card">
                    <div class="card-content">
                        <div class="news-thumb sm mb-5">
                            <a href="news-detail.html">
                                <img class="w-100" src="${data.img}" alt="">
                            </a>
                            <div class="image-time pl-3">${data.date}</div>
                            <a href="news-detail.html">
                                <div class="image-title pl-3">
                                    <h4>${data.title}</h4>
                                </div>
                            </a>
                            <p class="pl-3 pr-3">${data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
        i++;
    })
}
