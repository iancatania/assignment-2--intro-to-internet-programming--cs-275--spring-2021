let CookingAmount = prompt("How much rice do you want to cook?", "1.25");

let number = parseFloat(CookingAmount);
let whiteRiceTotal = number  * 1.6;
let sproutRiceTotal = number * 2;

function WhiteRice() {
  document.getElementById("WhiteRice").innerHTML = "Combine " + String(whiteRiceTotal) + " cup(s) of rice with 2 cups of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes.";
  document.getElementById("WhiteRice").innerHTML = "";
}

function SproutRice() {
  document.getElementById("SproutRice").innerHTML = "For slightly al dente rice: Combine " +  String(sproutRiceTotal) + " cups of rice with 2 cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. Remove from heat and let stand for 5 minutes. Fluff with a fork and serve. For softer rice: Increase liquid by " + String(sproutRiceTotal) + " cup and cook time by 5 minutes.";
  document.getElementById("WhiteRice").innerHTML = "";
}

window.onload = () => {
    // for button selected
};
