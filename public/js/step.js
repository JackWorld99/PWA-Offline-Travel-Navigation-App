var value = window.location.href.split("?")[1];
var step = 1;
var search = value - 1;
var result, result1, data1;

loadData();
function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      initial(this);
    }
  };
  xhttp.open("GET", "/public/navigation.json");
  xhttp.send();
}

function initial(xhttp) {
  data = JSON.parse(xhttp.responseText);
  result = data[search].instruction[step - 1];
  result1 = data[search].info[step - 1];
  document.getElementById("p1").innerHTML = result;
}
