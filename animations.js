// animations of titles

window.addEventListener("scroll", function(){

    // store nav in var
	let about = document.getElementById("textabout");

    // add sticky class if condition scroll Y > 0 
	about.classList.toggle("underlined", window.scrollY > 280);
})



// ADD ANIMATIONS

// Subtitle Who I Am

//switch to make it work only once
//let mySwitch = false;

window.addEventListener("scroll", function(){

    // store nav in var
	let whoiam = document.getElementById("whoiamsquare");

    

    // add sticky class if condition scroll Y > 0 
	whoiam.classList.toggle("animated", window.scrollY > 280);
    
})


// pic and textinfo

window.addEventListener("scroll", function(){

    // store nav in var
	let willpic = document.getElementById("willpic");
    let infotext = document.getElementById("infotext");

    // add sticky class if condition scroll Y > 0 
	willpic.classList.toggle("infoappears", window.scrollY > 280);
    infotext.classList.toggle("infoappears", window.scrollY > 280);
})

// Subtitle What I Do

window.addEventListener("scroll", function(){

    // store nav in var
	let whatido = document.getElementById("textwhatido");

    // add sticky class if condition scroll Y > 0 
	whatido.classList.toggle("animated", window.scrollY > 750);
})



// get parts in variables
let home = document.getElementById("home");
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");


// print home part

document.getElementById("testlink1").addEventListener("click", function(){

    // add sticky class if condition scroll Y > 0 
	home.classList.add("visible");
    about.classList.remove("visible");
    portfolio.classList.remove("visible");
    contact.classList.remove("visible");
    
})

document.getElementById("will").addEventListener("click", function(){

    // add sticky class if condition scroll Y > 0 
	home.classList.add("visible");
    about.classList.remove("visible");
    portfolio.classList.remove("visible");
    contact.classList.remove("visible");
    
})


// print about part

document.getElementById("testlink2").addEventListener("click", function(){

    // add sticky class if condition scroll Y > 0 
	home.classList.remove("visible");
    about.classList.add("visible");
    portfolio.classList.remove("visible");
    contact.classList.remove("visible");
})


// print portfolio part

document.getElementById("testlink3").addEventListener("click", function(){

    // add sticky class if condition scroll Y > 0 
	home.classList.remove("visible");
    about.classList.remove("visible");
    portfolio.classList.add("visible");
    contact.classList.remove("visible");

})


// print contact part

document.getElementById("testlink4").addEventListener("click", function(){

    // add sticky class if condition scroll Y > 0 
	home.classList.remove("visible");
    about.classList.remove("visible");
    portfolio.classList.remove("visible");
    contact.classList.add("visible");

})
