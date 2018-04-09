var stage, rect, bullet, targ, w, h; // global variables
var isFired = false;


function init()
{
    stage = new createjs.Stage("demoCanvas"); // instantiate stage
    h = demoCanvas.height;
    w = demoCanvas.width;
    // Functions
    drawGun();
    drawTarget();
    addScore();
        
    window.onkeydown = onKey; // Allows us to use the keys defined in the function onKey
    createjs.Ticker.on("tick", tick); // the main listener
}

function tick(event) {

    if (isFired) // if bullet is fired
    {
        var pt = bullet.localToLocal(bullet.x / w, bullet.y, targ);
        if (targ.hitTest(pt.x, pt.y)) {
            score.value++; // add 1 to the score value
            score.text = score.value;
        }
    }
    createjs.Ticker.framerate = 100; // operates more moothly
    stage.update(event);
}

function Bullet()
{
    //bullet = new createjs.Bitmap('Images/bullet.png'); // could'nt get collision to work with bitmaps
    
    bullet = new createjs.Shape(); // instantiate shape
    bullet.graphics.beginFill('gray'); // apply gray color
    bullet.graphics.drawRect(0, 0, 10, 10); // Its a rectangle
    // positions
    bullet.x = rect.x;
    bullet.y = rect.y + 230;
    //add to stage
    stage.addChild(bullet);
    // Animation of bullet
    createjs.Tween.get(bullet, { loop: false })
        .to({ y: -800 }, 1000)
        .call(function () { stage.removeChild(bullet);
        })
        .call(function () { isFired = false;
        });
}

function drawTarget() {
    targ = new createjs.Shape(); // instantiating the Shape class

    targColor = targ.graphics.beginFill('White');
    targ.graphics.drawRect(-400, -300, 80, 20);
    targ.x = w / 2;
    targ.y = h / 2;
    createjs.Tween.get(targ, { loop: true }).to({ x: 1120 }, 4000).to({ x: 400 }, 4000) // animation for the target
    stage.addChild(targ);
}

function drawGun() {

    rect = new createjs.Shape(); // instantiating the Shape class
    rectColor = rect.graphics.beginFill('White'); 
    rect.graphics.drawRect(0, 250, 20, 50);
    rect.scaleX = 1;
    rect.scaleY = 1;
    rect.x = w / 2;
    rect.y = h/ 2;
    stage.addChild(rect);
}

// Adding the score
function addScore() {
    score = new createjs.Text("0", "50px Verdana", "red"); // instantiate text
    score.x = w - 100;
    score.y = h - h + 100;
    score.textBaseline = "alphabetic";
    score.value = 0;
    stage.addChild(score);
}

// Keyboard Navigation 
function onKey(e) {
    switch (e.keyCode) {
        case 37: // move left
            rect.x -= 10;
            break;

        case 39: // move right
            rect.x += 10;
            break;

        case 32: // Shoot
            if (!isFired)
            {
                isFired = true;
                console.log("Is fired!");
                Bullet();
            }
            break;
    }
}