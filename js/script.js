document.querySelector("#main_img").addEventListener("click", function () {
  console.log("pressed");
  document.getElementById("secret").innerHTML = "You found the secret!";
});
