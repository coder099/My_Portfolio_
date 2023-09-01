$(document).ready(function(){
    $(".owl").dblclick(function(){
        var name = prompt("Ouch, that hurt, who are you?")

     var next= alert("Oh!, Its you " + name + ", welcome! Scroll down to see my projects.")

     
    })

$(".Yes").click(function(){
    $(".did").html("You are a nice person")
    $(".Yes").html("Knew it.")
    $(".No").hide()

})
$(".Yes").mouseenter(function(){

    $(".Yes").html("Yes")
    $(".No").html("No")
})


$(".No").mouseenter(function(){

    $(".No").html("Yes")
    $(".Yes").html("No")
})

$(".No").click(function(){
    $(".did").html("You are a nice person")
    $(".No").html("Knew it.")
    $(".Yes").hide();

})
})