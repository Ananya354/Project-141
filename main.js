var rightwristX = "";
var rightwristY = "";
var rightwristSCORE = "";

var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;
var audio1;
var pcscore =0;

var ball = {
x:350/2,
y:480/2,
r:20,
dx:3,
dy:3
}


function setup(){
var canvas = createCanvas(700,600);
canvas.parent("canvas");
video = createCapture(VIDEO);
video.size(700,600);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
rightwristX = results[0].pose.rightWrist.x;
rightwristY = results[0].pose.rightWrist.y;
rightwristSCORE = results[0].pose.keypoints[10].score;
console.log("rightwristX = "+rightwristX+" ,rightwristY = "+rightwristY+" ,rightwristSCORE = "+rightwristSCORE);
}
}

function modelLoaded(){
  console.log("Model is loaded successfully");
}

