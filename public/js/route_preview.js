const detail = document.querySelector(".detail");
loadData();
function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      displayData(this);
    }
  };
  xhttp.open("GET", "/public/navigation.json");
  xhttp.send();
}

function displayData(xhttp) {
  var data = JSON.parse(xhttp.responseText);
  var description = data[value - 1];
  const html = `
        <div id="btn7">
            <span style="color: #585858">${description.time}</span> (${description.distance})<br>
            <span style="font-size: 20px;">${description.description}</span>
        </div>
    `;
  detail.innerHTML += html;
}
