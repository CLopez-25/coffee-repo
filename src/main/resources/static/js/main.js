<<<<<<< HEAD
$(document).ready(function (){
    $(".favorite").on('click', function (){
        let customerId = $(this).attr("data-customer-id");
        let coffeeId = $(this).attr("data-coffee-id");
        $.get("/coffee/customer/" + customerId + "/favorite/" + coffeeId);
    });
=======
$(document).ready(function(){
   $(".favorite").on('click', function(){
      let customerId = $(this).attr("data-customer-id");
      let coffeeId = $(this).attr("data-coffee-id");
      $.post("/coffee/customer/" + customerId + "/favorite/" + coffeeId);
   });
>>>>>>> 0f9c18783d014ef75aa219bcf751eb50b4cf2542
});