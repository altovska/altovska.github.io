$(function() {
 $("#text").delay(2700).fadeTo( "slow", 1 );
  $("#nine").delay(2700).fadeTo( "slow", 1 );
  $("#two").delay(2700).fadeTo( "slow", 1 );
  $("#one").delay(2700).fadeTo( "slow", 1 );
  $("#seven").delay(2700).fadeTo( "slow", 1 );
  $("#four").delay(2700).fadeTo( "slow", 1 );
  $("#five").delay(2700).fadeTo( "slow", 1 );
});

AOS.init({
  duration: 1200,
})



    /* Open when someone clicks on the span element */
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
