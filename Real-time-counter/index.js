const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
  updateCounter()
});

function updateCounter(){
  totalCounterEl.innertext= textareaEl.ariaValueMax.length

  remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.ariaValueMax.length;
}