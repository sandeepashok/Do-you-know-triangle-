document.addEventListener("change", function (){
     var angle1 = document.querySelector("#angle1");
     var angle2 = document.querySelector("#angle2");
     var angle3 = document.querySelector("#angle3");
     var formTriangle = document.querySelector("#display1")
     var angleA = parseInt(angle1.value)
     var angleB = parseInt(angle2.value)
     var angleC = parseInt(angle3.value)
     // console.log(angleA)
     // console.log(angleB)
     // console.log(angleC)


     document.getElementById("calc-btn").addEventListener("click", function(){
     var sum = angleA+angleB+angleC;
     console.log(sum)  
     
          if(angleA !== "" && angleB !== "" && angleC !== ""){
               if(sum > 180 || sum < 180){
                    formTriangle.innerHTML = "The sum of angles you have entered is not equal to 180°, hence it does not form a triangle☹️."
               }else if(sum === 180){
                    formTriangle.innerHTML = "Congratulations! The sum of angles you have entered is exactly equal to 180°, hence it forms a perfect triangle😃"
               }
          }
          angle1.value = "";
          angle2.value = "";
          angle3.value = "";
     })
     
})

var answer1 = document.querySelector("#answer-1");
var answer1Disp = document.querySelector("#correct-answer1"); 
var button1 = document.querySelector("#button-1");

button1.addEventListener("click",function (){
     var answer1Val = answer1.value.toLowerCase();
     console.log(answer1Val)
     if(answer1.value !== ""){
     if(answer1Val == "obtuse angled triangle"){
          answer1Disp.innerHTML = "Right Answer😃"
     }else{
          answer1Disp.innerHTML = "Wrong Answer☹️ The answer is Obtuse angled triangle."
     }}
     answer1.value = "";
})

var answer2 = document.querySelector("#answer-2");
var answer2Disp = document.querySelector("#correct-answer2"); 
var button2 = document.querySelector("#button-2");

button2.addEventListener("click",function (){
     var answer2Val = answer2.value.toLowerCase();
     console.log(answer2Val)
     if(answer2.value !== ""){
     if(answer2Val == "acute angled triangle"){
          answer2Disp.innerHTML = "Right Answer😃"
     }else{
          answer2Disp.innerHTML = "Wrong Answer☹️ The answer is Acute angled triangle."
     }}
     answer2.value = "";
})

var answer3 = document.querySelector("#answer-3");
var answer3Disp = document.querySelector("#correct-answer3");
var button3 = document.querySelector("#button-3");

button3.addEventListener("click",function (){
     var answer3Val = answer3.value.toLowerCase();
     console.log(answer3Val)
     if(answer3.value !== ""){
     if(answer3Val == "right angled triangle"){
          answer3Disp.innerHTML = "Right Answer😃"
     }else{
          answer3Disp.innerHTML = "Wrong Answer☹️ The answer is Right angled triangle."
     }}
     answer3.value = "";
})

var answer4 = document.querySelector("#answer-4");
var answer4Disp = document.querySelector("#correct-answer4"); 
var button4 = document.querySelector("#button-4");

button4.addEventListener("click",function (){
     var answer4Val = answer4.value.toLowerCase();
     console.log(answer4Val)
     if(answer4.value !== ""){
     if(answer4Val == "equilateral triangle"){
          answer4Disp.innerHTML = "Right Answer😃"
     }else{
          answer4Disp.innerHTML = "Wrong Answer☹️ The answer is Equilateral triangle."
     }}
     answer4.value = "";
})

var answer5 = document.querySelector("#answer-5");
var answer5Disp = document.querySelector("#correct-answer5");
var button5 = document.querySelector("#button-5");

button5.addEventListener("click",function (){
     var answer5Val = answer5.value.toLowerCase();
     console.log(answer5Val)
     if(answer5.value !== ""){
     if(answer5Val == "isosceles triangle"){
          answer5Disp.innerHTML = "Right Answer😃"
     }else{
          answer5Disp.innerHTML = "Wrong Answer☹️ The answer is Isosceles triangle."
     }}
     answer5.value = "";
})

var answer61 = document.querySelector("#answer-61");
var answer62 = document.querySelector("#answer-62");
var answer6Disp = document.querySelector("#correct-answer6"); 
var button6 = document.querySelector("#button-6");

button6.addEventListener("click",function (){
     var angle61 =  parseInt(answer61.value)
     var angle62 = parseInt(answer62.value)
     var sumOfTwo = angle61 + angle62;
     var referenceAngle = 180;
     if(answer61.value !== "" && answer62.value !== ""){
     if(sumOfTwo < 180){
          answer6Disp.innerHTML = `The third angle is: ${referenceAngle - sumOfTwo}°`
     }else if(sumOfTwo > 180){
          answer6Disp.innerHTML = "The sum angles you have entered exceed 180°, It does not form a triangle. please enter suitable angle values."
     }
}
answer61.value = "";
answer62.value = "";
})

var answer71 = document.querySelector("#answer-71");
var answer72 = document.querySelector("#answer-72");
var answer7Disp = document.querySelector("#correct-answer7"); 
var button7 = document.querySelector("#button-7");

button7.addEventListener("click",function (){
     var base =  parseInt(answer71.value)
     var height = parseInt(answer72.value)
     if(answer71.value !== "" && answer72.value !== ""){
          answer7Disp.innerHTML = `The area of the triangle is: ${(base*height)/2}cm²`
     }
answer71.value = "";
answer72.value = "";
})






































// var angle1 = document.getElementById("angle1")
// var angle2 = document.getElementById("angle2")
// var angle3 = document.getElementById("angle3")

// var angleA = 0;
// var angleB = 0;
// var angleC = 0;

// angle1.addEventListener("change", function (){
//      angleA = angle1.value
// })
// angle2.addEventListener("change", function (){
//      angleB = angle2.value
// })
// angle3.addEventListener("change", function (){
//      angleC = angle3.value
// })

// console.log(angleA)
