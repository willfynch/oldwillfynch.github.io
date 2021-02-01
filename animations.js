
// global variables


// get position function 
// helper function to get an element's exact position
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
        var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
   
        xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
        yPosition += (el.offsetTop - yScrollPos + el.clientTop);
      } else {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }


  // ANIMATIONS 

// ------------ FOR PIC 1 ---------------------------

function picsAnimation1() {
    
    // move pics to destination
     
        anime({
            targets: pic1,
            width: "120px",
            rotateY: 200,
            scale: 2,
            rotate: '1turn',
            duration: 1500
        })    
}

function picsAnimationBack1() {
    
    
    // move pics to destination
    
        
        anime({
            targets: pic1,
            width: "100px",
            scale: 2,
            rotate: '1turn',
            duration: 1500
        })
    
}

//----------------- FOR PIC 2----------------

function picsAnimation2() {
    
    // move pics to destination
     
        anime({
            targets: pic2,
            width: "120px",
            
            scale: {
                delay: 800,
                value: 1.5
            },
            duration: 1500
        })    
}

function picsAnimationBack2() {
    
    // move pics to destination
        
        anime({
            targets: pic2,
            width: "100px",
            scale: {
                delay: 800,
                value: 3
            },
            duration: 1500
        })
    
}


//----------------- FOR PIC 3----------------

function picsAnimation3() {
    
    // move pics to destination
     
        anime({
            targets: pic3,
            width: "120px",
            scale: {
                delay: 800,
                value: 1.5
            },
            duration: 1500
        })    
}

function picsAnimationBack3() {
    
    // move pics to destination
        
        anime({
            targets: pic3,
            width:"100px",
            scale: {
                delay: 800,
                value: 3
            },
            duration: 1500
        })
    
}

// variables where we store elements
let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");


pic1.addEventListener("mouseover", picsAnimation1);
pic2.addEventListener("mouseover", picsAnimation2);
pic3.addEventListener("mouseover", picsAnimation3);


// when mouse is removed then move pics back to origin
pic1.addEventListener("mouseout", picsAnimationBack1);
pic2.addEventListener("mouseout", picsAnimationBack2);
pic3.addEventListener("mouseout", picsAnimationBack3);


//arrow shape in mobile layout

