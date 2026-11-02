# Le Petite Coffee Website

## 1. Project Overview

Le Petite Coffee is a small coffee shop located in Oakdene, Johannesburg South. The purpose of this project was to create a useful, professional and visually appealing website that provides the coffee shop with an online presence.

The website provides visitors with information about Le Petite Coffee, its products and menu, contact details, location information and enquiry facilities. It also includes a pickup-order builder; because no order service is configured, orders cannot yet be submitted through the website.

---

## 2. Website Objectives

The main objectives of the website are to:

- Improve Le Petite Coffee's online presence.
- Provide clear information about the coffee shop.
- Display the available products and menu categories.
- Help customers prepare enquiries for email.
- Provide contact and location information.
- Provide access to the coffee shop's social media presence.
- Make the website responsive across desktop, tablet and mobile screen sizes.
- Provide a simple and user-friendly navigation experience.
- Use interactive functionality to improve the overall user experience.

---

## 3. Website Pages

The website consists of five main pages.

### 3.1 Home (`index.html`)

The Home page introduces visitors to Le Petite Coffee and provides an overview of the business.

It includes:

- Navigation bar.
- Le Petite Coffee branding.
- Hero section.
- Welcome message.
- Featured products.
- Call-to-action buttons.
- Information encouraging visitors to explore the website.

### 3.2 About Us (`about.html`)

The About Us page provides information about the organisation and its purpose.

It includes:

- Organisation background.
- Opening hours from Monday to Sunday and on public holidays.
- A customer review carousel with sample demonstration content.
- Mission statement.
- Vision statement.
- Target audience information.
- Supporting images.
- Navigation and call-to-action elements.

### 3.3 Products/Menu (`products.html`)

The Products/Menu page presents the food and beverages offered by Le Petite Coffee.

The menu includes:

- Coffee.
- Tea.
- Hot chocolate.
- Pastries.
- Sandwiches.
- Light meals.

The products are displayed using structured content sections and styled menu cards.

The page also includes menu search and a pickup-order builder. Customers can add multiple items, select sizes and quantities, view the calculated total, and request a pickup date and time. Online order submission is not connected to a service yet.

### 3.4 Enquiry (`enquiry.html`)

The Enquiry page allows visitors to submit an enquiry.

The form includes:

- Name field.
- Email field.
- Phone field.
- Enquiry type dropdown.
- Message field.
- Submit button.
- Form validation and user feedback.

### 3.5 Contact Us (`contact.html`)

The Contact Us page provides ways for visitors to find and communicate with Le Petite Coffee.

It includes:

- Contact information.
- Location information.
- Opening hours.
- Social media links.
- Contact form.
- An interactive embedded map with touch and drag instructions and a link to Google Maps directions.
- Call-to-action elements.

---

## 4. Technologies Used

The website was developed using the following technologies:

### HTML5

HTML5 was used to create the structure and content of the website. Separate HTML files were created for each main page, with semantic sections used to organise the content.

### CSS3

CSS3 was used to create the visual appearance and layout of the website.

The CSS was used for:

- Colours.
- Typography.
- Spacing.
- Navigation.
- Hero sections.
- Buttons.
- Product cards.
- Forms.
- Images.
- Footer.
- Responsive layouts.
- Hover and focus effects.

### JavaScript

JavaScript was used to provide interactive functionality and improve the user experience.

JavaScript is also used for form validation and providing feedback when users interact with the forms.

### Google Maps

Google Maps functionality was included on the Contact page to help users locate Le Petite Coffee.

### Visual Studio Code

Visual Studio Code was used as the development environment for creating and editing the HTML, CSS and JavaScript files.

### GitHub

GitHub was used for version control and to store the project repository and development history.

---

## 5. CSS Styling and Layout

CSS is a major part of the website's visual design. The stylesheet was created as an external file named `style.css` and is located inside the `css` folder.

The CSS was developed to create a warm and welcoming coffee-shop aesthetic while maintaining consistency across all pages.

The stylesheet includes:

- A coffee-inspired colour palette using brown, cream, white and dark green.
- Consistent spacing and alignment.
- Typography styling for headings and body text.
- Navigation and logo styling.
- Hero section styling.
- Call-to-action button styling.
- Product and menu cards.
- About page sections.
- Contact and enquiry forms.
- Form focus states.
- Image styling.
- Map section styling.
- Social media links.
- Footer styling.
- Hover effects.
- Responsive layouts.

CSS Grid and Flexbox were used to create flexible layouts for product cards, menu items, contact details, navigation and target-audience sections.

Media queries were also implemented to adapt the website to different screen sizes.

The responsive CSS includes layouts for:

- Desktop screens.
- Tablet-sized screens.
- Mobile screens.
- Small mobile devices.

This allows the website to remain visually consistent and usable across different devices.

---

## 6. Design and Branding

The website uses a warm coffee-shop inspired design based on the organisation's proposal.

The main colours used throughout the website are:

- Brown.
- Cream.
- White.
- Dark green.
- Light brown.

The colour scheme was selected to create a warm and welcoming appearance that is appropriate for a coffee shop.

### Typography

The website uses:

- **Aptos Display** for headings.
- **Sanskrit Text** for body text.

Fallback fonts were included in the CSS to maintain readability if the preferred fonts are unavailable.

### Layout

The website uses:

- Clear navigation.
- Hero sections.
- Content sections.
- Product cards.
- Menu cards.
- Call-to-action buttons.
- Forms.
- Responsive grids.
- Consistent footer sections.

Rounded corners, spacing, shadows and hover effects were used to create a clean and modern appearance.

---

## 7. Interactive Functionality

Interactive functionality was included to make the website more engaging and user-friendly.

The website includes:

- Navigation links between all five pages.
- Interactive call-to-action buttons.
- Hover effects on navigation links and buttons.
- Focus states on form controls.
- JavaScript form validation.
- Form feedback.
- Searchable menu.
- Image enlargement using a lightbox.
- Coffee-cup loading animation on page load.
- Pickup-order builder with multiple items, sizes, quantities, pickup date and time.
- Google Maps location functionality.
- Social media links.
- Interactive visual effects.

JavaScript works together with the HTML forms to check user input and provide appropriate feedback.

---

## 8. Forms

Two main forms are included in the website:

### Enquiry Form

The enquiry form allows visitors to submit an enquiry by providing:

- Name.
- Email address.
- Phone number.
- Enquiry type.
- Message.

Form controls are styled using CSS and validated using JavaScript.

Submitting the form opens a prefilled email in the visitor's email application. The visitor must send it; the website cannot confirm delivery.

### Contact Form

The Contact page includes a contact form that allows visitors to provide their details and message.

The form is designed with:

- Clearly labelled fields.
- Consistent styling.
- Required input fields where appropriate.
- Validation.
- User feedback.

Submitting the contact form opens a prefilled email to `bonjour@lepetite.co.za` in the visitor's email application. The visitor must send the email manually; the website does not send it directly or confirm delivery.

---

## 9. Target Audience

The target audience for Le Petite Coffee includes:

- Students.
- Working professionals.
- Families.
- Visitors.
- Local customers.
- People looking for good coffee and food.
- People looking for a cosy space to connect or work.

The website design was created to provide clear information and simple navigation for these different groups of visitors.

---

## 10. Responsive Design

Responsive design was implemented using CSS media queries.

The website adjusts its layout according to the available screen size.

Responsive improvements include:

- Navigation changes on smaller screens.
- Flexible product and menu grids.
- Responsive images.
- Reduced spacing on smaller screens.
- Mobile-friendly buttons.
- Responsive hero sections.
- Target-audience cards that change from multiple columns to a single column on small screens.
- Responsive map and content areas.

The responsive design allows visitors to access the website on desktop computers, tablets and mobile devices.

---

## 11. SEO and Website Metadata

SEO-related HTML metadata was included to help describe the content of the website.

The pages use:

- Page-specific title tags.
- Meta descriptions.
- Relevant keywords.
- Descriptive image alternative text where applicable.

Meaningful page titles and descriptions help communicate the purpose and content of each page to search engines and users.

---

## 12. Images

Images are used throughout the website to support the coffee-shop theme and improve the visual presentation of the content.

Images are organised inside the `images` folder.

Meaningful image file names and descriptive alternative text are used where applicable to make the images easier to understand and maintain.

The CSS also ensures that images resize appropriately on different screen sizes.

## Website Screenshots

![Le Petit Coffee shop iphone 16 view](images/iphone%2016%20screenshot.png)

![Le Petit Coffee shop ipad views](images/ipad%20screenshot.png)
---

## 13. Project Structure

```text
Le-Petite-Coffee/
│
├── README.md
│
├── CHANGELOG.md
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
│
├── css/
│   └── style.css
│
├── javascript/
│   └── script.js
│
└── images/
```

### File descriptions

| File/Folder | Purpose |
|---|---|
| `index.html` | Home page |
| `about.html` | About Us page |
| `products.html` | Products/Menu page |
| `enquiry.html` | Customer enquiry page |
| `contact.html` | Contact page |
| `css/style.css` | Main website stylesheet |
| `javascript/script.js` | JavaScript functionality |
| `images/` | Website images |
| `README.md` | Project documentation |
| `CHANGELOG.md` | Project change log |

---

## 14. Development and Testing

The website was developed by creating the individual HTML pages first and then applying a shared external CSS stylesheet.

JavaScript was added to provide interactive functionality and form validation.

The website was opened and tested locally in the integrated browser from the Visual Studio Code workspace. Checks covered:

- Page navigation.
- Page layout and image display.
- Image lightbox interactions.
- Menu search.
- Form validation and email handoff.
- Pickup item selection, size pricing, totals and time validation.

The website has not been deployed. Email delivery and online order receipt cannot be tested until an email/order service is connected.

---

## 15. GitHub and Version Control

GitHub was used to store the website project and maintain a record of development.

Descriptive commits were used to document important development stages and changes made to the website.

The repository contains the website files, CSS, JavaScript, images and README documentation.

The change log documents the development of the CSS and the improvements made during the project.

---

## 16. Change Log

A separate `CHANGELOG.md` file was created to document project development and changes.

The change log records changes such as:

- Initial stylesheet development.
- General website styling.
- Colour scheme implementation.
- Typography.
- Navigation styling.
- Hero section development.
- Button styling.
- Product and menu card layouts.
- Form styling.
- Contact section styling.
- Map styling.
- Social media styling.
- Footer styling.
- Responsive design.
- Mobile optimisation.
- Testing and corrections.

The change log provides a record of how the CSS developed throughout the project.

---

## 17. References

Mozilla Developer Network (MDN) (2026) *CSS: Cascading Style Sheets*. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS

(Accessed: 18 September 2026).

Mozilla Developer Network (MDN) (2026) *CSS media queries*. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries

(Accessed: 18 September 2026).

Mozilla Developer Network (MDN) (2026) *Responsive web design*. Available at:
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

(Accessed: 18 September 2026).

World Wide Web Consortium (W3C) (2026) *CSS Snapshot 2026*. Available at:
https://www.w3.org/TR/css/

(Accessed: 18 September 2026).

---

## 18. Project Author

**Author:** Lethabo Thokozane Sithebe

**Project:** Le Petite Coffee Website

**Year:** 2026

## Part 3: Functionality, Ordering and Testing

### 1. JavaScript Enhancements

The shared JavaScript file (`javascript/script.js`) provides menu search, image lightboxes, a coffee-cup page-loading animation, form validation and pickup-order calculations.

### 2. Form Functionality and Validation

The enquiry and contact forms validate required fields. Submitting either form prepares an email addressed to `bonjour@lepetite.co.za` in the visitor's email application. The visitor must send that email themselves. The static website does not send emails or verify receipt.

### 3. Pickup Ordering

The Products/Menu page includes a pickup-order builder covering the menu's coffee, tea, hot chocolate, pastries, sandwiches and light meals. Customers can add multiple items, select a size and quantity, see item prices and the order total, and request a pickup date and time. Pickup time choices are limited to 6:00 a.m.–7:30 p.m. in 15-minute increments.

Size and price options use the prices shown on the menu. For specialty coffee and tea, which did not previously list size prices, the order form uses the listed price for Small and adds R10 for Large.

**Online order submission is not configured.** No order service endpoint has been provided, so the form does not send or place orders. It displays this limitation rather than claiming an order was received. Configure a form/order service and its public HTTPS endpoint before accepting online orders.

### 4. Search Engine Optimisation

SEO improvements include page-specific title tags, meta descriptions, structured headings, descriptive image alternative text and internal links.

The project includes `robots.txt` and `sitemap.xml`. Since the website has not been deployed and has no public URL, the sitemap contains no page URLs and `robots.txt` does not advertise a sitemap location. Add the absolute public URLs and sitemap address after choosing a hosting platform.

### 5. Responsive Design and Performance

Below-the-fold content images use native lazy loading. The coffee-cup loader appears during page loading and then fades away. Its animation respects the user's reduced-motion preference.

### 6. Testing

The site was opened and tested locally from the Visual Studio Code workspace in the integrated browser; it has **not** been deployed. Checks included:

- Menu searches, including matching and no-match results.
- Opening and closing enlarged images on the Home and Products pages.
- Pickup prices and size choices for all 13 orderable menu options.
- Multi-item order totals and quantity calculations.
- Rejection of pickup times outside the configured hours.
- Confirmation that pickup orders are not reported as submitted while no order endpoint is configured.
- The enquiry email handoff; actual email delivery and receipt cannot be verified by the static site.

### 7. Deployment Status

The website has been tested locally in Visual Studio Code and is not currently claimed to be live or deployed. A hosting platform, final public URL, working email/order service and production verification are still required before it can be considered published and fully operational.

### 8. References

Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 28 October 2026).

Mozilla Developer Network (MDN) (n.d.) *HTML forms*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 29 October 2026).

Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 October 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 31 October 2026).
