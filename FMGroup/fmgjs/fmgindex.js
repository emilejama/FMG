
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

function toggleThis(id){
    console.log(id);
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




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*function myFunction() {
  var x = document.getElementById("MysingleNav");
  if (x.className === "single-nav") {
    x.className += " responsive";
  } else {
    x.className = "single-nav";
  }
}
*/

var mainNav = document.getElementById('MysingleNav');

var navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('activeMenu');

});
