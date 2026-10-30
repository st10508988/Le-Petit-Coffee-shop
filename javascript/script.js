// ==========================================
// LE PETITE COFFEE - PART 3 JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const businessEmail = "bonjour@lepetite.co.za";
    // Set this to the public submission endpoint from the chosen order form provider.
    const orderFormEndpoint = "";

    // ------------------------------------------
    // 1. MENU SEARCH FUNCTIONALITY
    // ------------------------------------------

    const menuSearch = document.getElementById("menu-search");
    const menuItems = document.querySelectorAll(".menu-container > .menu-item");
    const menuSections = document.querySelectorAll(".menu-section");
    const menuSearchResults = document.getElementById("menu-search-results");

    if (menuSearch && menuItems.length > 0) {

        function filterMenu() {
            const searchTerm = menuSearch.value.toLowerCase().trim();
            let visibleCount = 0;

            menuItems.forEach(function (item) {
                const matches = item.textContent.toLowerCase().includes(searchTerm);
                item.hidden = !matches;

                if (matches) {
                    visibleCount += 1;
                }
            });

            menuSections.forEach(function (section) {
                const sectionItems = section.querySelectorAll(
                    ".menu-container > .menu-item"
                );

                if (sectionItems.length > 0) {
                    section.hidden = !Array.from(sectionItems).some(function (item) {
                        return !item.hidden;
                    });
                }
            });

            if (menuSearchResults) {
                if (searchTerm && visibleCount === 0) {
                    menuSearchResults.textContent = "No menu items match your search.";
                } else if (searchTerm) {
                    menuSearchResults.textContent =
                        "Found " + visibleCount + " matching menu item" +
                        (visibleCount === 1 ? "." : "s.");
                } else {
                    menuSearchResults.textContent =
                        "Showing all " + visibleCount + " menu items.";
                }
            }
        }

        menuSearch.addEventListener("input", filterMenu);
        filterMenu();

    }

    // ------------------------------------------
    // 2. PICKUP ORDER FORM
    // ------------------------------------------

    const pickupOrderForm = document.getElementById("pickup-order-form");

    if (pickupOrderForm) {
        const productSelect = pickupOrderForm.elements["product"];
        const sizeSelect = pickupOrderForm.elements["size"];
        const quantityInput = pickupOrderForm.elements["quantity"];
        const totalMessage = document.getElementById("order-total");
        const orderStatus = document.getElementById("order-status");
        const pickupDateInput = pickupOrderForm.elements["pickupDate"];
        const productOptions = {
            "fresh-coffee": {
                name: "Freshly brewed coffee",
                sizes: [{ name: "Small", price: 20 }, { name: "Large", price: 30 }]
            },
            espresso: { name: "Espresso", sizes: [{ name: "Standard", price: 20 }] },
            cappuccino: { name: "Cappuccino", sizes: [{ name: "Standard", price: 25 }] },
            latte: { name: "Latte", sizes: [{ name: "Standard", price: 30 }] },
            mocha: { name: "Mocha", sizes: [{ name: "Standard", price: 35 }] },
            "rooibos-tea": { name: "Rooibos Tea", sizes: [{ name: "Single size", price: 20 }] },
            "green-tea": { name: "Green Tea", sizes: [{ name: "Single size", price: 25 }] },
            "black-tea": { name: "Black Tea", sizes: [{ name: "Single size", price: 30 }] },
            "herbal-tea": { name: "Herbal Tea", sizes: [{ name: "Single size", price: 35 }] }
        };

        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().slice(0, 10);
        pickupDateInput.min = localToday;

        function updateOrderOptions() {
            const product = productOptions[productSelect.value];
            sizeSelect.replaceChildren();

            if (!product) {
                sizeSelect.add(new Option("Select a drink first", ""));
                sizeSelect.disabled = true;
                totalMessage.textContent = "Select a drink to see its price.";
                return;
            }

            product.sizes.forEach(function (size) {
                sizeSelect.add(new Option(
                    size.name + " - R" + size.price.toFixed(2),
                    size.name
                ));
            });
            sizeSelect.disabled = false;
            updateOrderTotal();
        }

        function updateOrderTotal() {
            const product = productOptions[productSelect.value];
            const size = product && product.sizes.find(function (option) {
                return option.name === sizeSelect.value;
            });

            if (!size) {
                totalMessage.textContent = "Select a drink to see its price.";
                return;
            }

            const quantity = Number(quantityInput.value);
            totalMessage.textContent =
                product.name + " (" + size.name + ") x " + quantity +
                " — Total: R" + (size.price * quantity).toFixed(2);
        }

        productSelect.addEventListener("change", updateOrderOptions);
        sizeSelect.addEventListener("change", updateOrderTotal);
        quantityInput.addEventListener("input", updateOrderTotal);

        pickupOrderForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            orderStatus.textContent = "";
            orderStatus.classList.remove("error");

            if (!pickupOrderForm.checkValidity()) {
                pickupOrderForm.reportValidity();
                return;
            }

            if (!orderFormEndpoint) {
                orderStatus.textContent =
                    "Your order was not sent: online ordering is not configured yet. Please contact the shop directly.";
                orderStatus.classList.add("error");
                return;
            }

            let endpoint;
            try {
                endpoint = new URL(orderFormEndpoint);
            } catch (error) {
                console.error("The pickup order endpoint URL is invalid.", error);
                orderStatus.textContent =
                    "Your order could not be sent because the order service is configured incorrectly.";
                orderStatus.classList.add("error");
                return;
            }

            if (endpoint.protocol !== "https:") {
                orderStatus.textContent =
                    "Your order was not sent because the order service must use a secure HTTPS endpoint.";
                orderStatus.classList.add("error");
                return;
            }

            try {
                const response = await fetch(endpoint.href, {
                    method: "POST",
                    body: new FormData(pickupOrderForm),
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Order service returned HTTP " + response.status);
                }

                orderStatus.textContent =
                    "Your pickup order was submitted. The shop will contact you to confirm it.";
                pickupOrderForm.reset();
                sizeSelect.replaceChildren(new Option("Select a drink first", ""));
                sizeSelect.disabled = true;
                pickupDateInput.min = localToday;
                updateOrderTotal();
            } catch (error) {
                console.error("Pickup order submission failed.", error);
                orderStatus.textContent =
                    "Your order could not be submitted. Please try again later or contact the shop.";
                orderStatus.classList.add("error");
            }
        });
    }


    // ------------------------------------------
    // 3. IMAGE LIGHTBOX
    // ------------------------------------------

    const galleryImages = document.querySelectorAll(
        ".gallery-image, .menu-image, .product-image"
    );

    let lightbox = document.getElementById("image-lightbox");

    if (!lightbox && galleryImages.length > 0) {

        lightbox = document.createElement("div");
        lightbox.id = "image-lightbox";
        lightbox.className = "lightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Enlarged image");

        lightbox.innerHTML = `
            <button type="button"
                    class="lightbox-close"
                    aria-label="Close enlarged image">
                &times;
            </button>

            <img src="images/coffee art.jpg" alt="" />
        `;

        document.body.appendChild(lightbox);

    }

    if (lightbox) {

        const enlargedImage = lightbox.querySelector("img");
        const closeButton = lightbox.querySelector(".lightbox-close");

        function closeLightbox() {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }

        galleryImages.forEach(function (image) {

            image.style.cursor = "zoom-in";

            image.addEventListener("click", function () {

                enlargedImage.src = image.currentSrc || image.src;
                enlargedImage.alt = image.alt || "Enlarged coffee shop image";

                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";

                closeButton.focus();

            });

        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeLightbox();
            }

        });

    }


    // ------------------------------------------
    // 4. ENQUIRY FORM VALIDATION
    // ------------------------------------------

    const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            const name = enquiryForm.elements["name"].value.trim();
            const email = enquiryForm.elements["email"].value.trim();
            const phone = enquiryForm.elements["phone"].value.trim();
            const enquiryType = enquiryForm.elements["enquiryType"].value;
            const message = enquiryForm.elements["message"].value.trim();

            const subject = encodeURIComponent(
                "Website enquiry: " + enquiryType
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + (phone || "Not provided") + "\n" +
                "Enquiry type: " + enquiryType + "\n\n" +
                "Message:\n" + message
            );

            const mailtoLink =
                "mailto:" + businessEmail +
                "?subject=" + subject +
                "&body=" + body;

            let feedback = enquiryForm.querySelector(".form-feedback");

            if (!feedback) {

                feedback = document.createElement("p");
                feedback.className = "form-feedback";
                feedback.setAttribute("role", "status");
                feedback.setAttribute("aria-live", "polite");

                enquiryForm.prepend(feedback);

            }

            const emailLink = document.createElement("a");
            emailLink.href = mailtoLink;
            emailLink.textContent = "open your email app";

            feedback.replaceChildren(
                "If your email app did not open, ",
                emailLink,
                " and send the message there. This website cannot confirm delivery."
            );
            feedback.classList.add("success");

            window.location.href = mailtoLink;

        });

    }


    // ------------------------------------------
    // 5. CONTACT FORM VALIDATION
    // ------------------------------------------

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const name = contactForm.elements["name"].value.trim();
            const email = contactForm.elements["email"].value.trim();
            const message = contactForm.elements["message"].value.trim();

            const messageType = "General enquiry";

            const subject = encodeURIComponent(
                "Website enquiry: " + messageType
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message type: " + messageType + "\n\n" +
                "Message:\n" + message
            );

            const mailtoLink =
                "mailto:" + businessEmail +
                "?subject=" + subject +
                "&body=" + body;

            window.location.href = mailtoLink;

        });

    }


    // ------------------------------------------
    // 6. CURRENT YEAR IN FOOTER
    // ------------------------------------------

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
