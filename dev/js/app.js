let sproutRiceAmount = CookingAmount;
let sproutRiceWater = sproutRiceAmount * 1.6;

function WhiteRice() {

  let CookingAmountWhite = prompt("How much white rice do you want to cook?", "0.00");
  let whiteRiceAmount = CookingAmountWhite;
  let whiteRiceWater = whiteRiceAmount * 2;

  document.getElementById("WhiteRice").style.width = "550px";
  document.getElementById("WhiteRice").style.marginLeft = "500px";
  document.getElementById("WhiteRice").style.textAlign = "center";
  document.getElementById("WhiteRice").style.background = "white";
  document.getElementById("WhiteRice").style.border = "solid black";
  document.getElementById("WhiteRice").innerHTML = "Combine " + String(whiteRiceAmount) + " cup(s) of rice with " + String(whiteRiceWater) +  " cups of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes.";
  document.getElementById("SproutRice").innerHTML = "";
}

function SproutRice() {

  let CookingAmountSprout = prompt("How much sprout rice do you want to cook?", "0.00");
  let sproutRiceAmount = CookingAmountSprout;
  let sproutRiceWater = sproutRiceAmount * 1.6;

  document.getElementById("SproutRice").style.width = "550px";
  document.getElementById("SproutRice").style.marginLeft = "500px";
  document.getElementById("SproutRice").style.textAlign = "center";
  document.getElementById("SproutRice").style.background = "white";
  document.getElementById("SproutRice").style.border = "solid black";
  document.getElementById("SproutRice").innerHTML = "For slightly al dente rice: Combine " +  String(sproutRiceAmount) + " cups of rice with " +  String(sproutRiceWater) +  " cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. Remove from heat and let stand for 5 minutes. Fluff with a fork and serve. For softer rice: Increase liquid by " + String(sproutRiceAmount) + " cup and cook time by 5 minutes.";
  document.getElementById("WhiteRice").innerHTML = "";
}
