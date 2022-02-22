let okBtn = document.getElementById("submit");
let cancelBtn = document.getElementById("cancel");

document.getElementById("heading").focus(); 

document.body.addEventListener('keypress', function (e) {
  console.log(e)
  if (e.key == "k") {
    console.log("Enter pressed")
    okBtn.focus();
  }
  if (e.key == "c") {
    console.log("Escape pressed")
    cancelBtn.focus()
  }
});     

okBtn.addEventListener('click', submit);
cancelBtn.addEventListener('click', cancel);

function submit() {
  alert('Ok button pressed')
}

function cancel() {
  alert('Cancel button pressed')
  
}

let focusableElements = document.querySelectorAll('a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]');
focusableElements = Array.prototype.slice.call(focusableElements);

const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

document.body.addEventListener('keydown', trap);

  function trap(event) {
    if (event.keyCode === 9) {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }

      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }

    }
  }





