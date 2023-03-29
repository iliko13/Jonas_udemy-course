const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active"); //toggle იმიტომ რომ add და remove ფუნქცია ერთდროულად აქვს
  input.focus(); //ეს იმისთვის რომ ღილაკზე დაჭერისას აქცენტი გადავიდეს ჩანაწერზე და ეგრევე დაიწყო წერა
});
