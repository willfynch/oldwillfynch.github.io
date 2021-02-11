/*

Change navbar color and font-color on scroll position 

*/

// make return top on refresh
//window.onbeforeunload = () => window.scrollTo(0, 0);
//document.documentElement.scrollTop = 0; 

window.addEventListener("scroll", function(){

    // store nav in var
	var nav = document.getElementById("nav-bar");

    // add sticky class if condition scroll Y > 0 
	nav.classList.toggle("sticky", window.scrollY > 750);
})


  