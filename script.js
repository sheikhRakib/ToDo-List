console.log("connected!");

var ENTER = 13;

// no data
setInterval(function(){
    if($("li").length === 0){
        $("ul").append('<li id="no-data" class="list-group-item disabled">No Data</li>');
    }
}, 500);

// add toggler button
$("#add").click(function () { 
    console.log("clicked");
    $("input").toggleClass("d-none");
});

// add new todo
$("input").keypress(function (e) { 
    if(e.which === ENTER) {
        var itm = $(this).val();
        if(itm != ""){
            $(this).val("");
            $("#no-data").remove();
            $("ul").append('<li class="list-group-item"><i class="fas fa-trash"></i> '+itm+'</li>');
        }
    }
});

// todo complete
$("ul").on("click", "li", function(){
    $(this).toggleClass("text-white bg-success");
});

// remove todos
$("ul").on("click", "li i", function (e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
