document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

        link.addEventListener("click", function (event) {
            var cup = document.createElement("span");
            cup.className = "coffee-click";
            cup.textContent = "\u2615";
            cup.setAttribute("aria-hidden", "true");
            cup.style.left = event.clientX + "px";
            cup.style.top = event.clientY + "px";
            document.body.appendChild(cup);

            window.setTimeout(function () {
                cup.remove();
            }, 700);
        });
    });
});
