var quiz = document.createElement('div');
document.body.appendChild(quiz);
quiz.setAttribute("id", "quiz");
var title = document.createElement('div');
quiz.appendChild(title);
title.setAttribute("id", "title");
title.innerHTML = "Which 'The Big Bang Theory' Character Are You?";
var img1 = document.createElement('img');
quiz.appendChild(img1);
img1.setAttribute("id", "img1");
img1.setAttribute("src", "images/thebigbangtheory.jpg");
img1.setAttribute("alt", "the big bang theory logo");
var question = document.createElement('div');
quiz.appendChild(question);
question.setAttribute("id", "question");
var answers = document.createElement('div');
quiz.appendChild(answers);
answers.setAttribute("id", "answers");
var btn = document.createElement("BUTTON");
quiz.appendChild(btn);
btn.setAttribute("id", "btn");
btn.setAttribute("onclick","firstQuestion()");
btn.innerHTML = "Start";



var points = 0;
var qNumber = document.getElementById('title');
var img1 = document.getElementById('img1');
var queston = document.getElementById('question');
var answers = document.getElementById('answers');
var btn = document.getElementById('btn');
var questionIndex = 0;


function firstQuestion(){  
	qNumber.innerHTML = "First question";
	img1.src ='images/Color.jpg';
	img1.alt ='Colors';
	queston.innerHTML = "Pick a color:";
    answers.innerHTML = "<input type='radio' name='options' id='Q-1-A-1' value='Blue' style='margin:20px'>Blue<input type='radio' name='options' id='Q-1-A-2' value='Red' style='margin:20px'>Red<input type='radio' name='options' id='Q-1-A-3' value='Green' style='margin:20px'>Green<input type='radio' name='options' id='Q-1-A-4' value='Pink' style='margin:20px'>Pink<input type='radio' name='options' id='Q-1-A-5' value='Yellow' style='margin:20px'>Yellow<input type='radio' name='options' id='Q-1-A-6' value='Orange' style='margin:20px'>orange";
	btn.innerHTML = "Next question";
	btn.onclick = toSecondQuestion;
	questionIndex++;
	console.log(points,questionIndex);
}	
		
function secondQuestion(){ 
	qNumber.innerHTML = "Second question";
	img1.src ='images/movie.jpg';
	img1.alt ='movies';
	queston.innerHTML = "What's your favorite movie?";
    answers.innerHTML = "<textarea id='question2' maxlength='30' placeholder='please write up to 30 words' rows='4' cols='50'></textarea>";
    btn.innerHTML = "Next question";
	btn.onclick = toThirdQuestion;
    questionIndex++;
    console.log(points,questionIndex);
}

function thirdQuestion(){ 
	qNumber.innerHTML = "Third question";
	img1.src ='images/SEASONS.png';
	img1.alt ='seasons of the year';
	queston.innerHTML = "Which is your favorite season?";
    answers.innerHTML = "<input type='checkbox' id='Q-3-A-1' value='Winter' style='margin:20px'>Winter<input type='checkbox' id='Q-3-A-2' value='Spring' style='margin:20px'>Spring<input type='checkbox' id='Q-3-A-3' value='Summer' style='margin:20px'>Summer<input type='checkbox' id='Q-3-A-4' value='Autumn' style='margin:20px'>Autumn";
    btn.innerHTML = "Next question";
	btn.onclick = toForthQuestion;
    questionIndex++;
    console.log(points,questionIndex);
}

function forthQuestion(){
	qNumber.innerHTML = "Forth question";
	img1.src = 'images/friday-night.jpg';
	img1.alt ='friday night poster';
	queston.innerHTML = "On a Friday night, you can be found?";
    answers.innerHTML = "<select><option id='Q-4-A-1' value='At a family dinner'>At a family dinner</option><option id='Q-4-A-2' value='Out with friends'>Out with friends</option><option id='Q-4-A-3' value='Playing board games'>Playing board games</option><option id='Q-4-A-4' value='Sleeping'>Sleeping</option></select>";
    btn.innerHTML = "Next question";
	btn.onclick = toFifthQuestion;
    questionIndex++;
    console.log(points,questionIndex);
}

function fifthQuestion(){
	qNumber.innerHTML = "Fifth question";
	img1.src ='images/super power.jpg';
	img1.alt ='super power';
	queston.innerHTML = "Which Power would you prefer?";
    answers.innerHTML = "<span style='margin:20px'>Super strength</span><input type='range' id='solutions' min='1' max='10' class='slider' style='margin:20px'><span style='margin:20px'>The ability to fly</span>";
    btn.innerHTML = "See results";
	btn.onclick = lastQuestion;
	questionIndex++;
	console.log(points,questionIndex);
}

function toSecondQuestion(questionIndex){
    check(questionIndex);
    secondQuestion();
}

function toThirdQuestion(questionIndex){
    check(questionIndex);
    thirdQuestion();
}

function toForthQuestion(questionIndex){
    check(questionIndex);
    forthQuestion();
}

function toFifthQuestion(questionIndex,points){
    check(questionIndex);
    fifthQuestion();
}

function lastQuestion(questionIndex){
    points = check(questionIndex);
    if ((points>=7) && (points<=10)){
		qNumber.innerHTML = "You are: Raj!";
	    img1.src ='images/raj.jpg';
	    img1.alt ='raj img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
    }
	else if ((points>10) && (points<=13)){
	   	qNumber.innerHTML = "You are: Amy!";
	    img1.src ='images/Amy_farrah_fowler.jpg';
	    img1.alt ='Amy img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
	}
	else if ((points>13) && (points<=16)){
	 	qNumber.innerHTML = "You are: Howard!";
	    img1.src ='images/howard.jpg';
	    img1.alt ='Howard img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
	}
	else if ((points>16) && (points<=19)){
		qNumber.innerHTML = "You are: Leonard!";
	    img1.src ='images/leonard.jpg';
	    img1.alt ='leonard img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
	}
	else if ((points>19) && (points<=22)){
		qNumber.innerHTML = "You are: Penny!";
	    img1.src ='images/Penny.jpg';
	    img1.alt ='penny img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
	}
	else if ((points>22) && (points<=26)){
		qNumber.innerHTML = "You are: Sheldon!";
	    img1.src ='images/shaldon.jpg';
	    img1.alt ='shaldon img';
	    queston.style = 'display: none';
	    answers.style = 'display: none';
	    btn.style = 'display: none';
	}
}

function check(){
		if (questionIndex === 1){
			if(document.getElementById('Q-1-A-1').checked == true){
				points += 1;
			}
			else if(document.getElementById('Q-1-A-2').checked == true){
				points += 2;
			}
			else if(document.getElementById('Q-1-A-3').checked == true){
				points += 3;
			}
			else if(document.getElementById('Q-1-A-4').checked == true){
				points += 4;
			}
			else if(document.getElementById('Q-1-A-5').checked == true){
				points += 5;
			}
			else if(document.getElementById('Q-1-A-6').checked == true){
				points += 6;
			}
		}
		else if(questionIndex === 2){
			if((document.getElementById('question2').value).length < 1){
               toSecondQuestion();
		    }
		    else {
			   points += 3;
		    }
		} 
		else if (questionIndex === 3){
			if(document.getElementById('Q-3-A-1').checked == true){
				points += 3;
			}
			else if(document.getElementById('Q-3-A-2').checked == true){
				points += 2;
			}
			else if(document.getElementById('Q-3-A-3').checked == true){
				points += 4;
			}
			else if(document.getElementById('Q-3-A-4').checked == true){
				points += 1;
		    }
		} 
		else if (questionIndex === 4){
			if(document.getElementById('Q-4-A-1').selected == true){
				points += 4;
			}
			else if(document.getElementById('Q-4-A-2').selected == true){
				points += 3;
			}
			else if(document.getElementById('Q-4-A-3').selected == true){
				points += 1;
			}
			else if(document.getElementById('Q-4-A-4').selected == true){
				points += 2;
		    }
		} 
		else if(questionIndex === 5){
			if((document.getElementById("solutions").value>=1) && (document.getElementById("solutions").value<6)){
			   points += 1;
		    }
		    else if((document.getElementById("solutions").value>=6) && (document.getElementById("solutions").value=10)){
			   points += 3;
		    }
		} 
	return points;	 		
}


	