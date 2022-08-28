const nextEl = document.querySelector(".next");

const imageContainerEl = document.querySelector(".image-container")

let currentImg = 1;

nextEl.addEventListener("click",()=>{
currentImg++;
updateImg();
});

function updateImg(){
  
  imageContainerEl.getElementsByClassName.transform =
  `translateX(-${(currentImg-1) * 500}px)`;
}