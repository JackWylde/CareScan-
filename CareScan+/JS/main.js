function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  window.onscroll = function() {stickyBar()};
  window.onload = function() {stickyBar()}

  // Get the navbar
  let navbar = document.querySelector(".navbar");
  let navChild = document.querySelector("#menucont"); 
  let text = document.querySelector(".textcontainer"); 
  let toTop = document.querySelector(".go-to-top"); 
  

  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyBar() {
    if (window.pageYOffset > 0) {
      navbar.classList.add("nav-bg-trans");
      navChild.classList.add("nav-child-shrink"); 
      navbar.classList.add("shadow-sm");
      toTop.classList.add("show-me"); 
      
    } else {
      navbar.classList.remove("nav-bg-trans");
      navChild.classList.remove("nav-child-shrink"); 
      navbar.classList.remove("shadow-sm");
      toTop.classList.remove("show-me"); 
    }
  }
  