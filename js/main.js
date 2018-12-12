$ (document).ready(function () 
{
 $('btn-animate').on('click',function(){
$('#btn-animate').removeclass('animated fadeoutright');
 })
setTimeout (function(){
   $ ('button').fadein(200);
}, 500);

    });
