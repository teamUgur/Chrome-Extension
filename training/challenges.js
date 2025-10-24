containerEl = document.getElementById("container")
containerEl.innerHTML = "<button onclick='buy()'>Buy</button>" 

function buy() {
    containerEl.innerHTML += "<p>Thank you for buying</p>"
}