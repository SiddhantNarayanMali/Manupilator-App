Leftx = 0;
Difference = 0;
RightX = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    Video = createCapture(VIDEO);
    Video.size(550,550);
    Ml5 = ml5.poseNet(Video,ModelL);
    Ml5.on("pose" , posing);

}

function ModelL()
{
    console.log("Posenet Is Initiallized");
}

function posing(r)
{
    if (r.length > 0)
    {
        console.log(r);
        Leftx = r[0].pose.leftWrist.x;
        RightX = r[0].pose.rightWrist.x;
    }
}

function draw()
{
    background("red");
    Difference = floor(Leftx-RightX)
    textSize(Difference);
    fill("green");
    text("Siddhant",40,300);
}