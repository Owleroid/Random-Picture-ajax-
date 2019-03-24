
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");
var URL = document.getElementById("imgURL");

btn.addEventListener("click", () => {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = () => {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
      URL.innerHTML = url;
    }
  }
  
  XHR.open("GET","https://dog.ceo/api/breeds/image/random");
  XHR.send();
})