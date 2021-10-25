const display = document.querySelector(".display");
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
  data.forEach(function (path) {
    const html = `
        <a href="../pages/route_preview.html?${path.link}" class="card-panel display row">
        <div class="display-details">
            <div class="display-title">${path.detail}</div>
        </div>
        </a>
    `;
    display.innerHTML += html;
  });
}
