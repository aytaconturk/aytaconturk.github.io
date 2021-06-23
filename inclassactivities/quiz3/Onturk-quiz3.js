$(document).ready(function() {
    $("#nav_list a").click(function() {
        const title = $(this).attr("title");

        // console.log(title);

        let url = './json_files/' + title + '.json';


        $.getJSON(url, function (data) {
            console.log(data.speakers[0].month);
            // for (int i)
            let month = data.speakers[0].month;
            let speaker = data.speakers[0].speaker;
            let text = data.speakers[0].text;
            let image = data.speakers[0].image;
            let headerTitle = data.speakers[0].title;

            console.log(speaker)
            console.log(text)

            $("main p").html(text);

            $("main h2").html(month + "<br>" + speaker);

            $("main img").attr("src", image);

            $("main h1").html(headerTitle);

        });


    });

}); // end ready
