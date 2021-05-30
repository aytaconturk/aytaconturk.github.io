// Document is ready
$(document).ready(function () {

    $("#birth").datepicker();

    var pr = ["ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Python"];
    $("#pr").autocomplete({
        source: pr
    });
});
