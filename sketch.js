var box
var groundImg,ground

function preload()
{
    groundImg=loadImage('Images/Ground/Ground.png')
}

function setup()
{
    createCanvas(displayWidth-20,displayHeight-30)

    box = createSprite(displayWidth/2,displayHeight/3,30,30)
    box.shapeColor = 'red'
    box.velocityY = 3

    ground = createSprite(displayWidth/2.2,displayHeight/1.1,10000000000,10)
    ground.shapeColor = 'brown'
    ground.addImage(groundImg,"Ground")
    ground.scale = 5
    groundImg.height = groundImg.height/3

    
}

function draw()
{
    background('blue')

    if(box.isTouching(ground))
    {
        box.velocityY = 0
    }

        if(keyDown('RIGHT_ARROW'))
    {
        box.x = box.x + 5
    }

    drawSprites()
}

function keyPressed()
{

}