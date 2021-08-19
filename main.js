
gameplay = document.getElementById("myCanvas");

ctx = gameplay.getContext("2d");
backgroundImg = "mars.png";
roverImg = "rover.png"
roverX = 10;
roverY = 10;
roverWidth = 20;
roverHeight = 20;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = backgroundImg;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag.src = roverImg;
    

    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0 ,0 ,canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", checkKeyDown);

function checkKeyDown(e) {
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38') {
            console.log("UP KEY PRESSED")
        }
        
        if(keyPressed == '40') {
            console.log("DOWN KEY PRESSED")
        }
        
        if(keyPressed == '37') {
            console.log("LEFT KEY PRESSED")
        }
        
        if(keyPressed == '39') {
            console.log("RIGHT KEY PRESSED")
        }
        
}