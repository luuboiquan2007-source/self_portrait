function setup() {
createCanvas(1000, 1000);
background('#fae')
//Top Rectangle for Background
  strokeWeight(0);
  stroke(0);
  fill('#bc2eab');
  rect(0, 0, 1000, 150);
  
   //Second Rectangle for Background
  strokeWeight(0);
  stroke(0);
  fill('#ff88f1');
  rect(0, 105, 1000, 300);
  //Body
   strokeWeight(4);
  stroke(51);
  fill('#aee2f8');
   beginShape();
  vertex(172, 688);
  vertex(94, 1040);
  vertex(988, 1040);
  vertex(835, 693);
  vertex(657, 604);
  vertex(401, 575);
  endShape(CLOSE);
  //hair
  strokeWeight(4);
  stroke(51);
  fill('#ee6145');
   beginShape();
  vertex(393, 581);
  vertex(317, 516);
  vertex(288, 452);
  vertex(360, 196);
  vertex(485, 135);
  vertex(567, 158);
  vertex(647, 231);
  vertex(700, 404);
  vertex(677, 553);
  vertex(700, 575);
  vertex(648, 553);
  vertex(648, 604);
  endShape(CLOSE);
  //hair
  strokeWeight(4);
  stroke(51);
  fill('#ee6145');
   beginShape();
  vertex(561, 601);
  vertex(570, 665);
  vertex(568, 693);
  vertex(549, 720);
  vertex(548, 752);
  vertex(534, 783);
  vertex(521, 840);
  vertex(605, 840);
  vertex(608, 800);
  vertex(600, 736);
  vertex(614, 714);
  vertex(607, 674);
  vertex(640, 630);
  vertex(633, 614);
  vertex(640, 604);
  endShape(CLOSE);
    //Face
  strokeWeight(4);
  stroke(51);
  fill('#d59fc8');
   beginShape();
  vertex(355, 350);
  vertex(355, 505);
  vertex(447, 624);
  vertex(567, 624);
  vertex(635, 504);
  vertex(635, 410);
  vertex(539, 276);
  vertex(445, 243);
  endShape(CLOSE);
  
  //Left Eye
  strokeWeight(4);
  stroke(51);
  fill('#eda2ad');
   beginShape();
  vertex(405, 390);
  vertex(388, 399);
  vertex(388, 411);
  vertex(405, 422);
  vertex(441, 422);
  vertex(453, 412);
  vertex(453, 398);
  vertex(437, 390);
  endShape(CLOSE);
  
  //Right Eye
  strokeWeight(4);
  stroke(51);
  fill('#eda2ad');
  beginShape();
  vertex(528, 399);
  vertex(528, 422);
  vertex(577, 422);
  vertex(596, 412);
  vertex(596, 396);
  vertex(578, 390);
  vertex(547, 390);
  endShape(CLOSE);
  //Nose
  strokeWeight(4);
  stroke(51);
  fill('#eda2ad');
   beginShape();
  vertex(477, 390);
  vertex(506, 390);
  vertex(510, 450);
  vertex(528, 467);
  vertex(528, 492);
  vertex(509, 509);
  vertex(477, 509);
  vertex(460, 500);
  vertex(460, 467);
  vertex(477, 447);
  endShape(CLOSE);
  //mouth
  strokeWeight(4);
  stroke(51);
  fill('#d61d56');
  rect(450, 538, 89, 30);
  //cheek left
  strokeWeight(4);
  stroke(51);
  fill('#d61d56');
  ellipse(396, 470, 53, 24);
  //cheek right
  strokeWeight(4);
  stroke(51);
  fill('#d61d56');
  ellipse(586, 470, 53, 24);
  //pupil left
  strokeWeight(4);
  stroke(51);
  fill('#1e0f13');
  ellipse(428, 412, 33, 15);
    //pupil right
  strokeWeight(4);
  stroke(51);
  fill('#1e0f13');
  ellipse(553, 412, 33, 15);
  //eyebrow left
  strokeWeight(4);
  stroke(51);
  fill('#733493');
   beginShape();
  vertex(375, 371);
  vertex(460, 371);
  vertex(460, 356);
  vertex(398, 356);
  endShape(CLOSE);
  //eyebrow right
  strokeWeight(4);
  stroke(51);
  fill('#733493');
   beginShape();
  vertex(524, 371);
  vertex(609, 371);
  vertex(602, 356);
  vertex(528, 364);
  endShape(CLOSE);
}


function draw() {

}
