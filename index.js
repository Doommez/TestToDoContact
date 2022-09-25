let modal=document.querySelectorAll("#modal")

console.log(modal[0]);
modal[0].addEventListener("click",log)
function log(e){
  if(e.target.getAttribute('data-targetButton')=="closeButton"){
   modal[0].classList.toggle("active");
  }
  
}

/* let buttons=document.querySelectorAll("button")


console.log(buttons);
console.log(buttons[3].dataset.targetbutton);
buttons[3].addEventListener("click", (e,this)=>buttons[3].dataset.targetbutton())

function closeModal(e,this){
  console.log(e.target,this)
} */