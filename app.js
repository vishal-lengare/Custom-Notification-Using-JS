
let toastBox = document.getElementById('toastBox');

let succesMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the Error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, please check again';

function showToast(msg){
  let toast =  document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes('Error')) {
    toast.classList.add("error");
  }
  if (msg.includes('Invalid')) {
    toast.classList.add("Invalid");
  }

  setTimeout(()=>{
    toast.remove();
  }, 6000)

}