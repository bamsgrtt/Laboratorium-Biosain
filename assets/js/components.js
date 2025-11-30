
// document.addEventListener("DOMContentLoaded", () => {
//     const includes = document.querySelectorAll("[data-include]");
//     includes.forEach(async el => {
//         const file = el.getAttribute("data-include");
//         const res = await fetch(file);
//         el.innerHTML = await res.text();
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    console.log("Components JS loaded"); // Debug
    const includes = document.querySelectorAll("[data-include]");
    includes.forEach(async el => {
        const file = el.getAttribute("data-include");
        const res = await fetch(file);
        el.innerHTML = await res.text();
    });
});

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const url = this.getAttribute("href");

            // abaikan anchor, telp, email, dan javascript void
            if (!url || url.startsWith("#") || url.startsWith("tel:") || url.startsWith("mailto:") || url === "javascript:void(0)") {
                return;
            }

            // tampilkan loading
            document.getElementById("loading-screen").style.display = "flex";
        });
  });


  document.body.classList.add("loading");
  document.getElementById("loading-screen").style.display = "flex";

  window.addEventListener("load", () => {
    document.getElementById("loading-screen").style.display = "none";
    document.body.classList.remove("loading");
  });

