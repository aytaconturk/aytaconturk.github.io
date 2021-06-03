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
});
