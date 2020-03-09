// Check off the item on click
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

// Remove the item on button click
$("ul").on("click", ".del", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });    
    event.stopPropagation();
})

// Add new item
$("input").on("keypress", function(event){
    if(event.which === 13){
        input_value = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='del'>X</span>" + input_value + "</li>");
    }
})

