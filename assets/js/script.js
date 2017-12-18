function bing() {
    console.log("bing!");
}

function bong() {
    console.log("bong!");
}

//Checks off todo on click
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); // jQuery function to stop bubbling of code.
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grab new todo text from input
        var todoText = $(this).val();
        //clear input
        $(this).val("");
        // create a new li and add into ul (append)
        $("ul").append('<li><span><i class="fa fa-times" aria-hidden="true"></i></span>' + todoText + '</li>');
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});
