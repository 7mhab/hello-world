let date=new Date();
let x = date.toLocaleString("en", {dateStyle: "long"})
let span = document.querySelector(".date")
span.innerHTML = x
