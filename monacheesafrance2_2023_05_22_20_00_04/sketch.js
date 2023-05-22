

function setup() {
 let cnv = createCanvas(400, 400);
  // cnv.position(100, 100);
  cnv.parent("div1");
}

function draw() {
  background(0,139,139)//TEAL
  fill(255,229,204)//platform color
  rect(0,350,400,100)//platform
  fill(153,76,0)//brown
  rect(195,150,50,200)//hair
  rect(155,150,50,200)//hair
  ellipse(200,190,110,160)//hair
  fill(222,184,185)//flesh color
  triangle(120,400,400,500,200,290)//torso
  rect(180,250,50,69)//neck
  ellipse(200,210,100,150)//head
  arc(230, 190,30,20, PI, TWO_PI)//eyelids
   arc(170, 190,30,20, PI, TWO_PI)//eyelids
  arc(200,250,50,20, PI/7, 6*PI/7);//mouth
  arc(200,230,15,15 , 0,PI, OPEN);//nose
  fill(255)//white
  ellipse(230,195,30,20)//eye
  ellipse(170,195,30,20)//eye
  fill(51,25,0)// dark brown
  arc(220, 400, 145,200, 0, PI + QUARTER_PI, OPEN);// robe
  fill(255,204,229)// pink
  arc(195,257,10,10, PI, TWO_PI);//lips
  arc(205,257,10,10, PI, TWO_PI);//lips
  arc(200,260,15,15, 0, PI, OPEN);//lips
  fill(0,102,102)//dark teal
  rect(240,350, 50,100, 15, 10, 5);// Sash
  

  
  
   
  eyeMotion = map(mouseX, 0, 400,-4,4, 1)//eye
  fill(145,110,110)//light brown

  eyeMotion2 =map(mouseY, 0,400,-4,4,1)//eye
  fill(145,110,110)//brown
  eyeMotion1 = map(mouseY, 0, 400, -4,4, 1)//eye
  ellipse(230+eyeMotion,195,15)//right eye
  ellipse(170+eyeMotion1+eyeMotion2+eyeMotion,195,15)//left eye
  
  
  
  
}
  
 