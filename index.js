var randomnNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomnNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomnNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomnNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomnNumber1>randomnNumber2){
  document.querySelector("h1").innerHTML="Player1 wins!🙌"
}
else if(randomnNumber2>randomnNumber1){
    document.querySelector("h1").innerHTML="Player2 wins!🙌"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
