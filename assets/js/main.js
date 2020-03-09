// Check off the item on click
$("li").on("click", function(){
    $(this).toggleClass("done");
});

// Remove the intem on button click
$(".del").on("click", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });    
    event.stopPropagation();
})

