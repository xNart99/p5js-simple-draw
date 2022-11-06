var calbg;
var calHeight = 200;
var calWidth = 150;
var calX = 180;
var calY = 150;
var titleX = 200;
var titleY = 100;
var titleSize = 50;
var rectBtn,circleBtn,triangelBtn,reloadBtn;
var choice;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var w = 0;
var h =0;
var d = 0
var setting = [
  {choice: '',
   showLogo: true
  }
]

var sliderLabel = ['X','Y','W','H','D','X2','Y2','X3','Y3'];
var sliderValue = ['X','Y','W','H','D','X2','Y2','X3','Y3'];
var label = ['X','Y','W','H','D','X2','Y2','X3','Y3'];
function preload() {
  calbg = loadImage('image/cal.png');
}
function setup() {
  createCanvas(800, 500);
  buttonLayout();
  formSlider();
  formText();
  reloadNe();

  
}

function draw() {
  background(220);
  if (setting[0].showLogo == true) {
    logoShow();
  }
  hideSlider();
  setValue()
  textSliderValue()
  drawActionBtn(setting[0].choice);

}
function logoShow(){
    textSize(50);
    text('Happy Calculator', 60, 100);
    image(calbg, 180, 150, 150, 200)
    textSize(30);
    text('Please choice your options', 80, 400);
  }
function buttonLayout(){
  rectBtn = createButton('Rect');
  rectBtn.position(50, 420);
  rectBtn.size(120, 50);
  rectBtn.mousePressed(onRectClick);
  

  circleBtn = createButton('Circle');
  circleBtn.position(200, 420);
  circleBtn.size(120, 50);
  circleBtn.mousePressed(onCircleClick);
  

  triangelBtn = createButton('Triange');
  triangelBtn.position(350, 420);
  triangelBtn.size(120, 50);
  triangelBtn.mousePressed(onTriangelClick);
  }

function hideButton(){
  rectBtn.hide();
  circleBtn.hide();
  triangelBtn.hide();
}
function onRectClick(){
  hideButton()
  setting[0].choice = 'rect'
  setting[0].showLogo = false;
}
function onCircleClick(){
  hideButton()
  setting[0].choice = 'circle'
  setting[0].showLogo = false;
}
function onTriangelClick(){
  hideButton()
  setting[0].choice = 'triangel'
  setting[0].showLogo = false;
}

function formSlider(){

      // X1
    x1 = createSlider(-1, width, -1);
    x1.position(550, 90);
    x1.size(100, 30);


    // Y1
    y1 = createSlider(-1, width, -1);
    y1.position(550, 120);
    y1.size(100, 30);


   // d
    d = createSlider(-1, width, -1);
    d.position(550, 150);
    d.size(100, 30);
  
    // W
    w = createSlider(-1, width, -1);
    w.position(550, 150);
    w.size(100, 30);

    // h
    h = createSlider(-1, width, -1);
    h.position(550, 180);
    h.size(100, 30);
    // x2
    x2 = createSlider(-1, width, -1);
    x2.position(550, 150);
    x2.size(100, 30);

    // y2
    y2 = createSlider(-1, width, -1);
    y2.position(550, 180);
    y2.size(100, 30);
    //x3
    x3 = createSlider(-1, width, -1);
    x3.position(550, 210);
    x3.size(100, 30);

    // y3
    y3 = createSlider(-1, width, -1);
    y3.position(550, 240);
    y3.size(100, 30);
    
}
function formText() {
    textSize(10);
    createSpan('Please slider in the variable').position(520, 60);
    label[0] = createSpan('X').position(520, 98);
    label[1] = createSpan('Y').position(520, 128);
    label[2] =createSpan('W').position(520, 158);
    label[3] = createSpan('H').position(520, 188);
    label[4] = createSpan('D:').position(520, 158);
    label[5] = createSpan('X2:').position(520, 158);
    label[6] = createSpan('Y2:').position(520, 188);
    label[7] = createSpan('X3:').position(520, 218);
    label[8] = createSpan('Y3:').position(520, 248);
    
  }
function hideSlider(){
  if(setting[0].choice == 'rect' || setting[0].choice == ''){
  d.hide();
  y2.hide();
  x2.hide();
  x3.hide();
  y3.hide();
  label[4].hide();
  label[5].hide();
  label[6].hide();
  label[7].hide();
  label[8].hide();
  }
    if(setting[0].choice == 'circle'){
        d.show();
        h.hide();
        w.hide();
        y2.hide();
        x2.hide();
        x3.hide();
        y3.hide();
        label[3].hide();
        label[2].hide();
        label[4].show();
       }
  if(setting[0].choice == 'triangel'){
  w.hide();
  h.hide();
  d.hide();
  x2.show();
  y2.show();
  x3.show();
  y3.show();
  label[2].hide();
  label[3].hide();
  label[5].show();
  label[6].show();
  label[7].show();
  label[8].show();
  }
}
function setValue(){
  sliderValue[0] = x1.value();
  sliderValue[1] = y1.value();
  sliderValue[2] = w.value();
  sliderValue[3] = h.value();
  sliderValue[4] = d.value();
  sliderValue[5] = x2.value();
  sliderValue[6] = y2.value();
  sliderValue[7] = x3.value();
  sliderValue[8] = y3.value();

}
function textSliderValue(){
  textSize(15);
  fill(0);
  if(setting[0].choice == 'rect' || setting[0].choice == ''){
  sliderLabel[0] = text(sliderValue[0],680, 108);
  sliderLabel[1] = text(sliderValue[1],680, 138);
   sliderLabel[2] = text(sliderValue[2],680, 168);
   sliderLabel[3] = text(sliderValue[3],680, 198)
  }
  if(setting[0].choice == 'circle'){
    sliderLabel[0] = text(sliderValue[0],680, 108);
    sliderLabel[1] = text(sliderValue[1],680, 138);
   sliderLabel[4] = text(sliderValue[4],680, 168);
  }
  if(setting[0].choice == 'triangel'){
  sliderLabel[0] = text(sliderValue[0],680, 108);
  sliderLabel[1] = text(sliderValue[1],680, 138);
  sliderLabel[5] = text(sliderValue[5],680, 168);
  sliderLabel[6] = text(sliderValue[6],680, 198)
  sliderLabel[7] = text(sliderValue[7],680, 228)
  sliderLabel[8] = text(sliderValue[8],680, 258)
  }
}

function drawActionBtn(choice){
  if(choice == 'rect'){
     if(sliderValue[0] != 1 && sliderValue[1] != 1 && sliderValue[2] != 1 && sliderValue[3] != 1){
       fill(129, 236, 236);
        rect(sliderValue[0],sliderValue[1],sliderValue[2],sliderValue[3]);
       randomCircle();
      }
       
    }
  if(choice == 'circle'){
    if(sliderValue[0] != 1 && sliderValue[1] != 1 && sliderValue[4] != 1){
      fill(129, 236, 236);
      circle(sliderValue[0],sliderValue[1],sliderValue[4])
      randomCircle();
    }
  }
  
    if(choice == 'triangel'){
    if(sliderValue[0] != 1 && sliderValue[1] != 1 && sliderValue[5] != 1 && sliderValue[6] != 1 && sliderValue[7] != 1 && sliderValue[8] != 1){
      fill(129, 236, 236); triangle(sliderValue[0],sliderValue[1],sliderValue[5],sliderValue[6],sliderValue[7],sliderValue[8]);
      randomCircle();
    }
  }

}
function reloadNe(){
  reloadBtn = createButton('Reload');
  reloadBtn.mousePressed(reloadPage);
}

function reloadPage(){
  location.reload();
}
function randomCircle(){
  for(var i =0;i< 10;i++){
    fill(255);
    if(setting[0].choice == 'rect'){
    rect(random(0,width),random(0,height), 5,5);
    }if(setting[0].choice == 'circle'){
    circle(random(0,width),random(0,height), 5)
    }
  }

}