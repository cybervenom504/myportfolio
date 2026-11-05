/* Portfolio JavaScript */
document.addEventListener("DOMContentLoaded", () => {
    // Add a mobile navigation button to every page.
    const nav = document.querySelector("header nav");
    const navList = nav ? nav.querySelector("ul") : null;

    if (nav && navList) {
        const menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Toggle navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
        nav.insertBefore(menuButton, navList);

        menuButton.addEventListener("click", () => {
            const isOpen = navList.classList.toggle("show-menu");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navList.querySelectorAll("a").forEach((link) => {
            if (link.getAttribute("href") === window.location.pathname.split("/").pop()) {
                link.setAttribute("aria-current", "page");
            }
            link.addEventListener("click", () => {
                navList.classList.remove("show-menu");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    // The contact form opens the visitor's email application (no server required).
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const subject = encodeURIComponent("Portfolio contact from " + name);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            window.location.href = `mailto:satofrompotato@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
