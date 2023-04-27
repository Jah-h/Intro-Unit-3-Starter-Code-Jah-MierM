/* Declare variables below to save the different sections (divs) of your story*/
let part1_choice1=document.querySelector(".option-one");
let part1_choice2=document.querySelector(".option-two");



let option_one_screen=document.querySelector(".option-one-screen");
let option_one_buttons=document.querySelector(".buttons1");

let option_two_screen=document.querySelector(".option-two-screen");
let option_two_buttons=document.querySelector(".buttons2");

let option_one_end_screen=document.querySelector(".option-one-end");


let option_two_end_screen=document.querySelector(".option-two-end");





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
part1_choice1.onclick=function(){
  option_one_screen.style.display="block";
  option_one_buttons.style.display="block";
};

part1_choice2.onclick=function(){
  option_two_screen.style.display="block";
  option_two_buttons.style.display="block";
};

option_one_buttons.onclick=function(){
  option_one_end_screen.style.display="block";
};

option_two_buttons.onclick=function(){
  option_two_end_screen.style.display="block";
};


var background_music = new sound("Night.mp3");
background_music.play();

function sound(src) 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}