let btn1 = document.querySelector(".btn_1");
let btn2 = document.querySelector(".btn_2");
let ScoreAll1 = document.querySelector(".count_1");
let ScoreAll2 = document.querySelector(".count_2");
let CurrentScore1 = document.querySelector(".current_1");
let CurrentScore2 = document.querySelector(".current_2");
let name1 = document.querySelector(".name1").textContent;
let name2 = document.querySelector(".name2").textContent;

btn1.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * 10);
  CurrentScore1.textContent = random1;
  ScoreAll1.textContent = parseInt(ScoreAll1.textContent) + random1;
  if (parseInt(ScoreAll1.textContent) >= 100) {
   btn1.disabled=true;
    alert(name1 + " WON!");
  }
});

btn2.addEventListener("click", () => {
  let random2 = Math.floor(Math.random() * 10);
  CurrentScore2.textContent = random2;
  ScoreAll2.textContent = parseInt(ScoreAll2.textContent) + random2;
  if (parseInt(ScoreAll2.textContent) >= 100) {
   btn2.disabled=true;
    alert(name2 + " WON!");
  }
});
