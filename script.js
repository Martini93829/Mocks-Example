let first = document.querySelector(".intro");
let hidden = document.querySelector(".sample");
let second = document.querySelector(".last");
let more = document.querySelector(".sample2");

first.onclick=function(){
	hidden.style.display="block";   
};

second.onmouseover=function(){
  more.style.display="block";  
}; 