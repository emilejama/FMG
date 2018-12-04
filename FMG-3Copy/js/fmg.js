
function toggleThis(id, event){
    console.log(id,event);
    $(".activePanel").removeClass("activePanel");
    $(id).addClass("activePanel");
    return false;
}

$(document).ready(function(){

  toggleThis(".panel-1");
  var currentLocation = window.location.hash.replace("#","");
  console.log('trololo',currentLocation);
  if(currentLocation)

  $(".active.show").removeClass("active show");
  $("."+currentLocation).addClass("active show").click();
  $("."+currentLocation).parent().addClass("active");

});

function toggleCity(id, event){
    console.log(id,event);
    $(".activeCity").removeClass("activeCity");
    $(id).addClass("activeCity");

    return false;
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

////////////////////////////////////
// NEW CODE START
////////////////////////////////////
/**
 * initMainMenu - main menu click action initialisation
 */
function initMainMenu () {
    $(".topnav a").on("click", changeMenu);

}
/**
 * changeMenu - main menu click action
 */
function changeMenu (event) {
    console.log(event);
    console.log(event.target.attributes.href.value);

}
/**
 * START ON PAGE LOAD
 */
$(document).ready(function(){
  //initMainMenu ()
});
////////////////////////////////////
// NEW CODE END
////////////////////////////////////
