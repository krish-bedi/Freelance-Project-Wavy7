$('input[type=range]').on('input', function () {
    var val = document.getElementById("project-client-range").value;
    console.log(val);
    $(".project-panel-edit-progress").html(val + "%");
});

$(".create").click(function () {
    $(".project-clone").clone(true, true).insertAfter("div.project:last").removeClass("project-clone");
});

$(".project").click(function () {
    $("div").removeClass("project-focus");
    $(this).addClass("project-focus");
});

$(".project").click(function () {
    if ($(this).hasClass("project")) {
        $("div").removeClass("project-focus");
        $(this).addClass("project-focus");
    }
});

$(".delete").click(function() {
   if ($(".project-focus").hasClass("project-clone")) {
       alert("Cannot delete first project!");
       var numItems = $('.yourclass').length
   }
    else {
        $(".project-focus").remove();
    }
});

$(".project-status-box-red").click(function() {
    $(".project-focus > .project-indicator").removeClass("project-indicator-green").addClass("project-indicator-red");
});

$(".project-status-box-green").click(function() {
    $(".project-focus > .project-indicator").removeClass("project-indicator-red").addClass("project-indicator-green");
});