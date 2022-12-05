

// // // functions


// //   //Neutral face

// // function neutralFace() {
// //   let ctx = document.getElementById('canvas_example').getContext('2d');
// //   ctx.arc(150,150,100,50,Math.PI*2,true); // Outer circle
// //   ctx.moveTo(10,20);
// //   ctx.lineTo(100,20);                  // Mouth (stright line)
// //   ctx.moveTo(65,65);
// //   ctx.arc(60,65,5,0,Math.PI*2,true); // Left eye
// //   ctx.moveTo(95,65);
// //   ctx.arc(90,65,5,0,Math.PI*2,true); // Right eye
// //   ctx.stroke();
// // }

// //   //Happy face

// // function happyFace() {
// //   let ctx = document.getElementById('canvas_example').getContext('2d');
// //   ctx.beginPath();
// //   ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
// //   ctx.moveTo(110,75);
// //   ctx.arc(75,75,35,0,Math.PI,false); // Mouth (clockwise)
// //   ctx.moveTo(65,65);
// //   ctx.arc(60,65,5,0,Math.PI*2,true); // Left eye
// //   ctx.moveTo(95,65);
// //   ctx.arc(90,65,5,0,Math.PI*2,true); // Right eye
// //   ctx.stroke();
// // }

// //   //Sad face

// // function sadFace() {
// //   let ctx = document.getElementById('canvas_example').getContext('2d');
// //   ctx.beginPath();
// //   ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
// //   ctx.moveTo(110,75);
// //   ctx.arc(15,15,35,0,Math.PI,false); // Mouth (clockwise)
// //   ctx.moveTo(65,65);
// //   ctx.arc(60,65,5,0,Math.PI*2,true); // Left eye
// //   ctx.moveTo(95,65);
// //   ctx.arc(90,65,5,0,Math.PI*2,true); // Right eye
// //   ctx.stroke();
// // }

// // // main program body

// // let canvas = document.getElementById('canvas_example');
// // let context = canvas.getContext('2d');
// // const WIDTH = canvas.width;
// // const HEIGHT = canvas.height;

// // let neutralButton = document.getElementById("neutralbutton");
// // let happyButton = document.getElementById("happybutton");
// // let sadButton = document.getElementById("sadbutton");

// // // With anonymous functions, the context can be passed as a parameter to each of the functions
// // neutralButton.addEventListener("click", function() { neutralFace(context) });
// // happyButton.addEventListener("click", function() { happyFace(context) });
// // sadButton.addEventListener("click", function() { sadFace(context) });




// // // try to include these elements in your code the teacher said its usefull.
// //     var p = document.getElementById('someText');
// //     // console.log(p);
// //     // console.log("Before: "+p.className);
// //     p.className = "red";
// //     // console.log("After: "+p.className);}
  

// // /* draw happy face neutral and sad
// //   function draw() {
// // let ctx = document.getElementById('canvas_example').getContext('2d');
// // ctx.beginPath();
// // ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
// // ctx.moveTo(110,75);
// // ctx.arc(75,75,35,0,Math.PI,false); // Mouth (clockwise)
// // ctx.moveTo(65,65);
// // ctx.arc(60,65,5,0,Math.PI*2,true); // Left eye
// // ctx.moveTo(95,65);
// // ctx.arc(90,65,5,0,Math.PI*2,true); // Right eye
// // ctx.stroke();
// // }*/




// /**
//  * @Note 
//  * You initial js above
//  * Use the be codes for the canvas
//  * 
//  */

// const canvas = document.getElementById("canvas_example");
// const neutralbutton = document.getElementById("neutralbutton");
// const happybutton = document.getElementById("happybutton");
// const sadbutton = document.getElementById("sadbutton");

//     // set responsive (This can however be done in the css):
//     /**
//     @NOTE
//     You've already set the width and height on the html;
//     You can make canvas responsive by using css
//     or by using the ratio below
//     Todo so remove the width and the height from 
//     the html file and set width=> 100% in css if using css

//     Please if something isn't clear let me know. Thanks.
//     */


//     // canvas background color

// canvas.style.backgroundColor = "#cccccc";

//     //const HRatio = 1.5;

//     //canvas.height = canvas.width * HRatio;

//     // FUNCTIONS

//     function drawFace(ctx) {
//       ctx.beginPath();
//       drawHair(ctx);

//       // const c_width = canvas.offsetWidth;
//       // const c_height = canvas.offsetHeight;

//       ctx.arc(200, 200, 60, 0, Math.PI * 2, true);
//       // nose
//       ctx.moveTo(210, 200);

//       ctx.arc(203, 200, 5, 0, Math.PI, true);
//       ctx.fillStyle = "#FFFF00"
//       ctx.fill()

//       drawEyes(ctx);

//       drawEars(ctx);


//       // handle clickables
//       handleClickable();
//     }

//     function drawSmilingFace() {
//       if (canvas.getContext) {
//         // get th 2d prop to be used for graphics
//         const ctx = canvas.getContext("2d");

//         drawFace(ctx);

//         // now draw the mouth

//         ctx.moveTo(230, 200);

//         ctx.arc(200, 200, 35, 0, Math.PI, false);

//         ctx.stroke();
//       }
//     }

//     function drawSadFace() {
//       //
//       if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         drawFace(ctx);

//         // draw the mouth
//         ctx.moveTo(180, 230);

//         ctx.arc(200, 245, 25, Math.PI, 0, false);

//         ctx.stroke();
//       }
//     }

//     function drawNeutralFace() {
//       if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         drawFace(ctx);

//         // draw lips
//         ctx.moveTo(225, 225);

//         ctx.lineTo(180, 225);
//         //
//         ctx.stroke();
//       }
//     }

//     function drawHair(ctx) {
//       ctx.moveTo(200, 155);
//       ctx.arc(200, 160, 50, Math.PI, 0, false);
//       ctx.fill();
//     }

//     function drawEyes(ctx) {
//       // now draw the right eye
//       ctx.moveTo(235, 180);

//       ctx.arc(230, 180, 5, 0, Math.PI * 2, true);
//       // left eye

//       ctx.moveTo(180, 180);

//       ctx.arc(175, 180, 5, 0, Math.PI * 2, true);
//     }

//     function drawEars(ctx) {
//       ctx.moveTo(265, 190);

//       ctx.arc(260, 190, 12, Math.PI * 1.5, Math.PI / 2, false);

//       ctx.moveTo(140, 190);

//       ctx.arc(140, 190, 12, Math.PI / 2, Math.PI * 1.5, false);
//     }
//     //<!-- handle clkc -->

//     function handleClickable() {
//       canvas.addEventListener("click", (e) => {
//         getMouseEventPosition(canvas, e);
//         console.log(getMouseEventPosition(canvas, e));
//       });
//     }

//     // get mouse click position

//     function getMouseEventPosition(target, event) {
//       const area = target.getBoundingClientRect();
//       const x = event.clientX - area.left;
//       const y = event.clientY - area.top;

//       // widden the eye
//       function drawWideEyes() {
//         if (canvas.getContext) {
//           // get th 2d prop to be used for graphics

//           const ctx = canvas.getContext("2d");

//           ctx.beginPath();

//           // left eye

//           ctx.moveTo(180, 180);

//           ctx.arc(175, 180, 10, 0, Math.PI * 2, true);

//           //  right eye
//           ctx.moveTo(235, 180);

//           ctx.arc(230, 180, 10, 0, Math.PI * 2, true);

//           //
//           ctx.stroke();
//         }
//       }
//       // close right eyes
//       function CloseRightEye() {
//         if (canvas.getContext) {
//           // get th 2d prop to be used for graphics

//           const ctx = canvas.getContext("2d");

//           ctx.beginPath();

//           //  right eye
//           ctx.moveTo(210, 170);

//           ctx.clearRect(210, 170, 30, 30);
//         }
//       }

//       // close left eyes
//       function closeLeftEye() {
//         if (canvas.getContext) {
//           // get th 2d prop to be used for graphics

//           const ctx = canvas.getContext("2d");

//           ctx.beginPath();

//           //  right eye
//           ctx.moveTo(168, 173);

//           ctx.clearRect(168, 173, 30, 30);
//         }
//       }

//       // calculate the mouse pointer coordinates
//       //use the values to cause the effects

//       if (
//         Math.floor(x) >= 199 &&
//         Math.floor(x) <= 204 &&
//         Math.floor(y) >= 198 &&
//         Math.floor(y) <= 203
//       ) {
//         return drawWideEyes();
//       } else if (
//         Math.floor(x) >= 227 &&
//         Math.floor(x) <= 231 &&
//         Math.floor(y) >= 176 &&
//         Math.floor(y) <= 180
//       ) {
//         return CloseRightEye();
//       } else if (
//         Math.floor(x) >= 172 &&
//         Math.floor(x) <= 178 &&
//         Math.floor(y) >= 175 &&
//         Math.floor(y) <= 180
//       ) {
//         return closeLeftEye();
//       }

//       return { x, y };
//     }



//   function writeIllustration(face, color) {

//     const p = document.createElement("p");
//     p.setAttribute("id", 'text')
//     p.textContent = face;
//     p.style.marginTop = "-10px";
//     p.style.fontSize = "22px";
//     p.style.color = color;
//     document.body.appendChild(p);
  

// };

//     document.body.addEventListener("click", (e) => {
//       if (e.target === neutralbutton) {
//         const ctx = canvas.getContext("2d");
//         ctx.clearRect(10, 10, 300, 400)
//         neutralIllustration();
//         drawNeutralFace();
//       } else if (e.target === happybutton) {
//         const ctx = canvas.getContext("2d");
//         ctx.clearRect(10, 10, 300, 400)

//          happyIlustration()
//         drawSmilingFace();
//       } else if (e.target === sadbutton) {
//         const ctx = canvas.getContext("2d");
//         ctx.clearRect(10, 10, 300, 400);

//         sadIllustration();
//         drawSadFace();
//       }
//     });
 


// function sadIllustration() {
//   if (document.getElementById("text")) {
//       document.getElementById("text").remove();
//       writeIllustration("Sad Face", 'crimson');

//       } else {
//       writeIllustration("Sad Face", 'crimson');
//   };
// };

// function happyIlustration(){
// if (document.getElementById("text")) {
//   document.getElementById("text").remove();
//   writeIllustration("Smilling Face", 'blue');

// } else {
//   writeIllustration("Smilling Face", 'blue');
//   };
// }


// function neutralIllustration() {
//   if (document.getElementById("text")) {
//     document.getElementById("text").remove();
//     writeIllustration("Neutral Face", 'green');

//   } else {
//     writeIllustration("Neutral Face", 'green');
//   };
// }


const canvas = document.getElementById("canvas_example");
const ctx = canvas.getContext("2d");


// get btns
const neutralbtn = document.getElementById("neutralbutton")
const sadbtn = document.getElementById("sadbutton")
const happybtn = document.getElementById("happybutton")

canvas.style.backgroundColor = "pink";
// canvas dimensions
// to be used in drawinf the face
let canvas_width = undefined;
let canvas_height = undefined;
// call the happy face

Face();

function Face() {
  canvas_width = canvas.offsetWidth;
  canvas_height = canvas.offsetHeight;

  facialExpression();
}

function facialExpression() {

  document.addEventListener("DOMContentLoaded", () => {
    faceCompents()
    smile();
    
   })
  
}


document.addEventListener("click", (e) => {
  if (e.target === neutralbtn) {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    faceCompents();
    // drawEyeBrow(280, 140);
    // drawEyeBrow(169, 140);
    neutral();
    
    neutralIllustration();
  } else if (e.target === sadbtn) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    faceCompents();
    sad();
    sadIllustration()
  } else if (e.target === happybtn) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    faceCompents();
    smile();
    happyIllustration();
  }
});



function faceCompents() {
  drawFace();
 
  drawEye(170, 160, 25, 15);
  // right eye
  
  drawEye(280, 160, 25, 15);
  // drawNose();
  drawNose()

  // right ear
  rightEar();
  // left ear
  leftEar()
  // hair
  
  drawEyeBrow(280, 130);
  drawEyeBrow(169, 130);
  hair();
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(canvas_width / 2, canvas_height / 2, 140, 0, Math.PI * 2, true);
  // add face color
  ctx.fillStyle = "#FCFBF0";
  ctx.fill();
  ctx.strokeStyle = "#FCFBF0"
  ctx.stroke();




}

function drawEye(x, y, R, r) {
  
  // outer dimensions
  ctx.beginPath();
  ctx.arc(x, y, R, 0, Math.PI * 2, true);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#cccccc";
  ctx.stroke();

  // lens
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2, true);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.stroke();


}

function drawEyeBrow(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 35, Math.PI, 0, false);
  ctx.strokeStyle = "#808080";
  ctx.lineWidth = 5;
  ctx.stroke();
  
}

function drawNose() {

  ctx.beginPath();
  ctx.arc(215, 220, 10, 0, Math.PI * 2, true);
  ctx.arc(240, 220, 10, 0, Math.PI * 2, true);
  ctx.fillStyle = "gray"
  ctx.fill();

}
function smile() {
  ctx.beginPath()
  ctx.arc(230, 230, 60, 0, Math.PI, false);
  ctx.lineWidth = 4;
  ctx.stroke();

  drawChin();
}


function neutral() {
  ctx.beginPath()
  ctx.moveTo(200, 270)
  ctx.lineTo(260, 270)
  ctx.lineWidth = 4;
  ctx.stroke();
}


function sad() {
  ctx.beginPath();
  ctx.arc(230, 310, 60, Math.PI, 0, false);
  ctx.lineWidth = 4;
  ctx.stroke();
}


function rightEar() {
  ctx.beginPath();
  ctx.arc(350, 190, 50, Math.PI*1.5, Math.PI/2, false)
  
  ctx.fillStyle = "#FCFBF0";
  ctx.strokeStyle = "#FCFBF0"
  ctx.fill();
  ctx.stroke();
}


function leftEar() {
  ctx.beginPath();
  ctx.arc(100, 190, 50, Math.PI / 2, Math.PI * 1.5, false)
  ctx.fillStyle = "#FCFBF0";
  ctx.fill();
  ctx.strokeStyle = "#FCFBF0"
  ctx.stroke();
}


function hair() {
//   ctx.beginPath()
  ctx.beginPath();
  ctx.moveTo(150, 80);
  ctx.bezierCurveTo(150, 90, 220, -50, 300, 80, 60, 90);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
  
}



function getMousePosition(canv, e) {
  let position = canvas.getBoundingClientRect();
  return {
    x: e.clientX - position.left,
    y: e.clientY - position.top,
  }
}

function widenEyes() {
  drawEye(170, 160, 30, 20)
  drawEye(280, 160, 30, 20)
}

function closeEye(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 35, 0, Math.PI * 2, true)
  ctx.clearRect(x-20, y-20, 40, 40)
  ctx.fillStyle = "#FCFBF0";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x - 20, y);
  ctx.lineTo(x + 20, y);
  // ctx.fillStyle = '#000';
  // ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
}


  function writeIllustration(face, color) {

    const p = document.createElement("p");
    p.setAttribute("id", 'text')

    p.textContent = face;

    p.style.marginTop = "-10px";

    p.style.fontSize = "22px";

    p.style.color = color;

    document.getElementById("main").appendChild(p);

};

function neutralIllustration() {
  if (document.getElementById("text")) {
    if (document.getElementById("text1")) document.getElementById("text1").remove();
    document.getElementById("text").remove();
    writeIllustration("Neutral Face", 'green');

  } else {
    writeIllustration("Neutral Face", 'green');
  };
}



function sadIllustration() {
  if (document.getElementById("text")) {
    if (document.getElementById("text1")) document.getElementById("text1").remove();
      document.getElementById("text").remove();
      writeIllustration("Sad Face", 'crimson');

      } else {
      writeIllustration("Sad Face", 'crimson');
  };
};

function happyIllustration(){
  if (document.getElementById("text")) {
  if (document.getElementById("text1")) document.getElementById("text1").remove();
  document.getElementById("text").remove();
  writeIllustration("Smilling Face", 'blue');

} else {
  writeIllustration("Smilling Face", 'blue');
  };
}


canvas.addEventListener("click", (e) => {
  let coord = getMousePosition(canvas, e);
  // console.log(coord);
  let x = coord.x;
  let y = coord.y;

  // click on the right left nose
  if ((Math.floor(x) > 210 && Math.floor(x) < 220) && ((Math.floor(y) > 210 && Math.floor(y) < 225))) {
    widenEyes();
    noseClickEffect();
  }

  // right nose
  if ((Math.floor(x) > 230 && Math.floor(x) < 245) && ((Math.floor(y) > 212 && Math.floor(y) < 230))) {
    widenEyes();
    noseClickEffect();
  }
});


canvas.addEventListener("click", (e) => {

  let coord = getMousePosition(canvas, e);
  // console.log(coord);

  let x = coord.x;
  let y = coord.y;

  if ((Math.floor(x) > 270 && Math.floor(x) < 290) && (Math.floor(y) > 150 && Math.floor(y) < 170)) {
    
    closeEye(280, 160);

    eyeClickEffect();
    
        
  }
  if ((Math.floor(x) > 155 && Math.floor(x) < 180) && (Math.floor(y) > 150 && Math.floor(y) < 170)) {
    closeEye(170, 160);
    eyeClickEffect();
  }
});



  function describeEffect(text) {

    const p1 = document.createElement("p");
    p1.setAttribute("id", 'text1')

    p1.textContent = text;

    p1.style.marginTop = "-10px";

    p1.style.fontSize = "22px";

    p1.style.color = "crimson";

    document.getElementById("main").appendChild(p1);

};

function noseClickEffect() {
  if (document.getElementById("text1")) {
      document.getElementById("text1").remove();
      describeEffect("Nose clicked!");
      } else {
      describeEffect("Nose clicked!");
  };
};

function eyeClickEffect() {
  if (document.getElementById("text1")) {
      document.getElementById("text1").remove();
      describeEffect("Eye Clicked!");
      } else {
      describeEffect("Eye clicked!");
  };
};

function drawChin() {
    // left chin
  ctx.beginPath();
  ctx.moveTo(150, 290)
  ctx.bezierCurveTo(150, 290, 110, 250, 130, 210);
  ctx.strokeStyle = "#gray";
  ctx.lineWidth = 1;
  ctx.stroke();

  // right chin

  ctx.beginPath();
  ctx.moveTo(320, 280)
  ctx.bezierCurveTo(320,280, 350, 230, 330, 210);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 1;
  ctx.stroke();
}