$(".innercollapse p").slideUp();
$("#default").slideDown();




$("#pop").click(function () 
{ 
  

   $("#option").css("left","0px" );
$("#pop").css("left","250px")

    
})
$(".close").click(function()
{

    window.alert("hawwwwwwwwwwwwk");
    $("#option").css("left","250px");






})

$("h2").click(function()
{

    $(this).next().slideDown();
    $("p").not($(this).next()).slideUp();

})

/*
$("h2").click(function(){

if( $(this).next().slideDown()       )

{

    $(this).next().slideUp();


}




})*/
var end = new Date('06/21/2022 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('days').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days + 'days ';
        document.getElementById('hours').innerHTML = hours + 'hrs ';
        document.getElementById('mins').innerHTML = minutes + 'mins ';
        document.getElementById('secs').innerHTML = seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);



    var x=document.getElementById("couter");
    var y=parseFloat(x);
    console.log(typeof(y));
$("textarea").keydown(function (e) { 



    
});
 