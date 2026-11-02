// ==========================================
// LE PETITE COFFEE - PART 3 JAVASCRIPT
// ==========================================

const pageLoader = document.querySelector(".page-loader");

if (pageLoader) {
    function hidePageLoader() {
        pageLoader.classList.add("is-hidden");
        window.setTimeout(function () {
            pageLoader.remove();
        }, 400);
    }

    if (document.readyState === "complete") {
        hidePageLoader();
    } else {
        window.addEventListener("load", hidePageLoader, { once: true });
    }

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            pageLoader.remove();
        }
    }, { once: true });
}

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
        const orderItems = document.getElementById("order-items");
        const itemTemplate = document.getElementById("order-item-template");
        const totalMessage = document.getElementById("order-total");
        const orderStatus = document.getElementById("order-status");
        const pickupDateInput = pickupOrderForm.elements["pickupDate"];
        let orderItemCounter = 0;
        const productOptions = {
            "fresh-coffee": { name: "Freshly brewed coffee", sizes: [{ name: "Small", price: 20 }, { name: "Large", price: 30 }] },
            espresso: { name: "Espresso", sizes: [{ name: "Small", price: 20 }, { name: "Large", price: 30 }] },
            cappuccino: { name: "Cappuccino", sizes: [{ name: "Small", price: 25 }, { name: "Large", price: 35 }] },
            latte: { name: "Latte", sizes: [{ name: "Small", price: 30 }, { name: "Large", price: 40 }] },
            mocha: { name: "Mocha", sizes: [{ name: "Small", price: 35 }, { name: "Large", price: 45 }] },
            "rooibos-tea": { name: "Rooibos Tea", sizes: [{ name: "Small", price: 20 }, { name: "Large", price: 30 }] },
            "green-tea": { name: "Green Tea", sizes: [{ name: "Small", price: 25 }, { name: "Large", price: 35 }] },
            "black-tea": { name: "Black Tea", sizes: [{ name: "Small", price: 30 }, { name: "Large", price: 40 }] },
            "herbal-tea": { name: "Herbal Tea", sizes: [{ name: "Small", price: 35 }, { name: "Large", price: 45 }] },
            "hot-chocolate": { name: "Hot Chocolate", sizes: [{ name: "Small", price: 25 }, { name: "Large", price: 35 }] },
            pastry: { name: "Fresh Pastry", sizes: [{ name: "Small", price: 15 }, { name: "Large", price: 25 }] },
            sandwich: { name: "Sandwich", sizes: [{ name: "Small", price: 30 }, { name: "Large", price: 40 }] },
            "light-meal": { name: "Light Meal", sizes: [{ name: "Small", price: 30 }, { name: "Large", price: 40 }] }
        };

        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().slice(0, 10);
        pickupDateInput.min = localToday;

        function updateOrderTotal() {
            const rows = Array.from(orderItems.querySelectorAll(".order-item-row"));
            const selectedItems = rows.map(function (row) {
                const product = productOptions[row.querySelector(".order-product").value];
                const sizeName = row.querySelector(".order-size").value;
                const size = product && product.sizes.find(function (option) {
                    return option.name === sizeName;
                });

                if (!product || !size) {
                    return null;
                }

                const quantity = Number(row.querySelector(".order-quantity").value);
                return {
                    name: product.name + " (" + size.name + ") x " + quantity,
                    total: size.price * quantity
                };
            }).filter(Boolean);

            if (selectedItems.length === 0) {
                totalMessage.textContent = "Choose a menu item to see your order total.";
                return;
            }

            const itemsSummary = selectedItems.map(function (item) {
                return item.name + " — R" + item.total.toFixed(2);
            }).join(" | ");
            const orderTotal = selectedItems.reduce(function (total, item) {
                return total + item.total;
            }, 0);

            totalMessage.textContent =
                itemsSummary + " | Order total: R" + orderTotal.toFixed(2);
        }

        function addOrderItem() {
            const row = itemTemplate.content.firstElementChild.cloneNode(true);
            const itemNumber = ++orderItemCounter;
            const productSelect = row.querySelector(".order-product");
            const sizeSelect = row.querySelector(".order-size");
            const quantityInput = row.querySelector(".order-quantity");
            const labels = row.querySelectorAll(".form-group label");

            row.querySelector("legend").textContent = "Order item " + itemNumber;
            productSelect.name = "items[" + itemNumber + "][product]";
            productSelect.id = "order-product-" + itemNumber;
            labels[0].htmlFor = productSelect.id;
            sizeSelect.name = "items[" + itemNumber + "][size]";
            sizeSelect.id = "order-size-" + itemNumber;
            labels[1].htmlFor = sizeSelect.id;
            quantityInput.name = "items[" + itemNumber + "][quantity]";
            quantityInput.id = "order-quantity-" + itemNumber;
            labels[2].htmlFor = quantityInput.id;

            productSelect.addEventListener("change", function () {
                const product = productOptions[productSelect.value];
                sizeSelect.replaceChildren();

                if (!product) {
                    sizeSelect.add(new Option("Select an item first", ""));
                    sizeSelect.disabled = true;
                } else {
                    product.sizes.forEach(function (size) {
                        sizeSelect.add(new Option(
                            size.name + " - R" + size.price.toFixed(2),
                            size.name
                        ));
                    });
                    sizeSelect.disabled = false;
                }

                updateOrderTotal();
            });
            sizeSelect.addEventListener("change", updateOrderTotal);
            quantityInput.addEventListener("input", updateOrderTotal);
            row.querySelector(".order-remove-item").addEventListener("click", function () {
                row.remove();
                if (orderItems.children.length === 0) {
                    addOrderItem();
                } else {
                    updateOrderTotal();
                }
            });

            orderItems.appendChild(row);
            updateOrderTotal();
        }

        document.querySelector(".order-add-item").addEventListener("click", addOrderItem);
        addOrderItem();

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
                orderItems.replaceChildren();
                addOrderItem();
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
    // 3. ABOUT PAGE REVIEW CAROUSEL
    // ------------------------------------------

    const reviewCarousel = document.querySelector(".review-carousel");

    if (reviewCarousel) {
        const reviewSlides = Array.from(
            reviewCarousel.querySelectorAll(".review-slide")
        );
        const reviewIndicators = Array.from(
            reviewCarousel.querySelectorAll(".review-indicators button")
        );
        const previousReviewButton =
            reviewCarousel.querySelector(".review-previous");
        const nextReviewButton =
            reviewCarousel.querySelector(".review-next");
        let currentReviewIndex = 0;

        function showReview(index) {
            currentReviewIndex =
                (index + reviewSlides.length) % reviewSlides.length;

            reviewSlides.forEach(function (slide, slideIndex) {
                slide.hidden = slideIndex !== currentReviewIndex;
                reviewIndicators[slideIndex].setAttribute(
                    "aria-pressed",
                    String(slideIndex === currentReviewIndex)
                );
            });
        }

        previousReviewButton.addEventListener("click", function () {
            showReview(currentReviewIndex - 1);
        });

        nextReviewButton.addEventListener("click", function () {
            showReview(currentReviewIndex + 1);
        });

        reviewIndicators.forEach(function (indicator, index) {
            indicator.addEventListener("click", function () {
                showReview(index);
            });
        });
    }


    // ------------------------------------------
    // 4. IMAGE LIGHTBOX
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
    // 5. ENQUIRY FORM VALIDATION
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
    // 6. CONTACT FORM VALIDATION
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
    // 7. CURRENT YEAR IN FOOTER
    // ------------------------------------------

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
