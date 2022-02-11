document.body.addEventListener('keypress', function(e) {
    console.log(e)
    if (e.key == "Enter") {
      console.log("Enter pressed")
      submit();
    } 
    if (e.key == "Escape") {
        console.log("Escape pressed")
        cancel()
      }
  });

  function submit(){
      alert('Ok button pressed')
  }

  function cancel(){
    alert('Cancel button pressed')
}

var firstElement = document.getElementById("tutorials")

// document.getElementById("tutorials").on('focus', function() {
//     document.getElementById("cancel").focus();
//   });

//   $("#cancel").on('focus', function() {
//     $('#tutorials').focus();
//   });