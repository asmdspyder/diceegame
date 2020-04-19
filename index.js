var rn1=Math.floor(Math.random()*6)+1;
var img1="dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);

var rn2=Math.floor(Math.random()*6)+1;
var img1="dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img1);


if(rn1 > rn2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS !!";
}
else if(rn1 < rn2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS !!";
}
else{
  document.querySelector("h1").innerHTML="ITS A DRAW !!";
}
