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

