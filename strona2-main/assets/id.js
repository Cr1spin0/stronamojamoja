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
    });
});
