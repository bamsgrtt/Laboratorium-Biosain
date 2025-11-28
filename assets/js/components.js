
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

