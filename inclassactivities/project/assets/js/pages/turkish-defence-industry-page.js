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
});
