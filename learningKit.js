window.onload = function(){
        // Array to hold the button names, which will be displayed on the website
        var buttonCaption = ["Add", "Multiplication", "Number of Digits", "reverse is same", "Num Pyramid",
							 "* Pyramid", "Addition of Array", "Prime Array", "Odd in Array", "All Factorial",
							 "Mod without mod", "Fibonacci", "Plaindromes till num", "Fact 1 to 10", "Matrix Multiplication",
							 "Negative Positive", "Two Halfs", "pow of 5", "Sum of Digits", "Countdown","Sum 10 to 30","Convert to base 2","Multiplication Table",
             "Power of ab without pow","LCM","GCD","Sum of n primes","Random name","Lucky lottary","Roots","Enter till 0","positive or negative","Positive in array","Area of triangle","Grade","triangles of numbers",
            "right angled triangle","inverted triangle","square","product of digits"];
        // Loop till the number of button you want
        for (var i = 0; i < 40; i++){

              var newButton = document.createElement("button"); // Creates the button element
              $("nav").append(newButton); // Add it in the navigation section of your Html Code
              $(newButton).attr("id", "button" + (i+1));  // Assings Id to button corresposnding to its order
              $(newButton).html(buttonCaption[i]);  // Gets the name of the button and assing it
              $(newButton).attr("onClick", "execute("+i+");") // add onClick event to each button
              $(newButton).attr("class", "button"); // add class to button
        }
}
// Takes the problem number and display it description, Js Code, FlowChart
function execute(problemId) {
        // Array which holds the discription of each problem
        var descriptionOfProblem = ['Sum of 10 numbers','Multiply 5 numbers','Finding The Number of Digits',"Checking For Palindrome",'Number Pyramid','Star Pyramid','Sum of Elements of Array','Counting Prime Numbers in an Array','Display Odd Number in Array',
        'Display All Factorials Till a Number Less than 10','Modulo Without Using Modulo','Fibonacci','All Palindrome Till A Number More than 10','Factorial of 1 to 10','Matrix Multiplication',
        'First 4 Negative numbers equals to next 4 positive Numbers','Sum of two Halfs Equal','How Many power of 5 are there in a Number','Sum of digits','CountDown','Sum of 10 to 30',
        'Convert base to 2', 'Multiplication Table','Power of a to b without using power function','LCM','GCD','Sum of n Primes','Random Name','Lucky Lottery','Checking Roots',
        'Numbers will be shown positive or Negative till a 0 is entered','the entered numbers are negative or postive','How many Positive Numbers in an array','Area of triangle','Grades','pascal triangle','stars formed in a right angled triangle form','inverted triangle',
      'square of n rows','product of digits'];
		/* for teaching purposes, we used some pure JS and some jQuery codes in the following lines.
		   compare them, and learn both */
        document.getElementById("description").innerHTML= "<p> Computational thinking problem for a program to "+descriptionOfProblem[problemId] +"</p>"; // Getting the corresponding description of the problem from discription array
        document.getElementById("flowchart").setAttribute("src","./images-1/images/fc_" + (problemId+1) + ".jpg"); // gets the image of flowchart
        document.getElementById("flowchart").style.display="none";
        $("#javaScript").attr("src","./images-1/images/js_" + (problemId+1) + ".jpg"); // gets the image of javascript code
        $("#javaScript").css("display","none");
        $("#anotherSolution").css("display","none");
        $("#checkbox1").prop("checked",false);
        document.getElementById("checkbox2").checked=false;
        document.getElementById("checkbox3").checked=false;
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 3 functions.
   compare them, and learn both */
function checkUncheck1(){
      if ($("#flowchart").css("display")==="none") {
         $("#flowchart").css("display","inline");
      }
      else {
         $("#flowchart").css("display","none");
      }
}

function checkUncheck2(){
      if (document.getElementById("javaScript").style.display==="none") {
         document.getElementById("javaScript").style.display="inline";
      }
      else {
         document.getElementById("javaScript").style.display="none";
      }
}
function checkUncheck3(){
        if ($("#anotherSolution").css("display")==="none") {
            $("#anotherSolution").css("display","inline");
        }
        else {
            $("anotherSolution").css("display","none");
        }
}
function checkUncheck4(){
   document.getElementById("anotherSolution").setAttribute("src","./images-1/images/os2.jpg");
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 2 functions.
   compare them, and learn both */
function zoomIn() {
        $("#flowchart").css("width","200%");
}
function zoomOut() {
        document.getElementById("flowchart").style.width="100%";
}
