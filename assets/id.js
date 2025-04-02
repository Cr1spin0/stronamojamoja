if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker zarejestrowany!");
  });
}
document.addEventListener("DOMContentLoaded", function () {
    const helpImg = document.querySelector(".help_img");
    const helpBox = document.getElementById("helpBox");

    helpImg.addEventListener("click", function () {
        if (helpBox.style.display === "none" || helpBox.style.display === "") {
            helpBox.style.display = "block";
        } else {
            helpBox.style.display = "none";
        }
document.addEventListener("DOMContentLoaded", function() {
    let dokumentyButton = document.querySelector(".bottom_bar .bottom_element_grid:nth-child(2)");
    
    if (dokumentyButton) {
        dokumentyButton.addEventListener("click", function() {
            window.location.href = "dokumenty.html";
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const timeString = `${hours}:${minutes}:${seconds} ${day}:${month}:${year}`;
    document.getElementById('clock').textContent = timeString;
}

// Aktualizuj zegar co sekundę
setInterval(updateClock, 1000);

// Ustaw zegar na start
updateClock();

        });
    }
});
