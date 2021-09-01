document.querySelector(document).ready(function() {  
    document.querySelector('#discountModal').modal('show');
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}



document.addEventListener('DOMContentLoaded' , init);

function init(){


  let query = window.matchMedia("( max-width : 400)");

  if(query.matches){
    alert("HELLO");
  }
}

// const mediaQuery = window.matchMedia('(man-width: 400px)')
// // Check if the media query is true


// var nav = document.querySelector('#navbar');
// var side = document.querySelector('.sidenav');

// window.onResize = function() {
//   if () 
//   {
//     alert("HELLO");
//   }
  
  
  
//   // nav.classList.add('.remove');
//   // else nav.classList.remove('.remove');

//   // if (mediaQuery.matches) side.classList.add('.remove');
//   // else side.classList.remove('.remove');
// };