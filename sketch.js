var ball;
var dballpos,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
 
    dballpos = database.ref('Ball/position');
    dballpos.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data)
{
    position = data.val();
    console.log(position.x);
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x,y)
{
    database.ref('Ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}


/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function showError()
{
    console.log("Error");
}