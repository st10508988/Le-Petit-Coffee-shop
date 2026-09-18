# Le Petite Coffee Website Change Log

This change log records the planning and development progress for the Le Petite
Coffee website.

## Part 1: Planning and Design

| Week | Version | Changes Made | Reason for Change |
| --- | --- | --- | --- |
| Week 1 | 1.0 | Selected **Le Petite Coffee** as the organisation. | To create a website for a real small business in Oakdene, Johannesburg South. |
| Week 1 | 1.1 | Researched and documented the organisation's background, mission, vision and target audience. | To understand the organisation and the needs of its customers. |
| Week 1 | 1.2 | Identified the main website objectives. | To establish what the website should achieve for the business and its customers. |
| Week 2 | 1.3 | Planned the five main pages: **Home, About Us, Products/Menu, Enquiry and Contact Us**. | To organise the website content and meet the project requirements. |
| Week 2 | 1.4 | Planned the website features, including navigation, menu information, enquiry forms, contact information and social media links. | To make the website useful and easy to navigate. |
| Week 2 | 1.5 | Created the low-fidelity wireframe. | To plan the structure and layout before starting development. |
| Week 2 | 1.6 | Selected the **brown, cream, white and dark green** colour scheme. | To create a warm and welcoming coffee-shop design. |
| Week 2 | 1.7 | Selected **Sanskrit Text** for body text and **Aptos Display** for headings. | To create a consistent and visually appealing typography style. |

## 1. Overview

This change log documents the development and improvement of the CSS used for the Le Petite Coffee website.

The CSS was developed to create a warm, welcoming and professional coffee-shop design while ensuring that the website remains easy to navigate and responsive across different screen sizes.

The stylesheet was created as an external CSS file:

`css/style.css`

The CSS was developed alongside the five HTML pages:

- `index.html` - Home
- `about.html` - About Us
- `products.html` - Products/Menu
- `enquiry.html` - Enquiry
- `contact.html` - Contact Us

The stylesheet was divided into clearly labelled sections to make the code easier to read, maintain and update.

---


## Part 2: Development

| Week | Version | Changes Made | Reason for Change |
| --- | --- | --- | --- |
| Week 3 | 2.0 | Created the five HTML pages: `index.html`, `about.html`, `products.html`, `enquiry.html` and `contact.html`. | To implement the website structure planned in Part 1. |
| Week 3 | 2.1 | Added a navigation bar and links between all pages. | To allow users to move easily around the website. |
| Week 3 | 2.2 | Developed the Home page with a hero section, welcome message and call-to-action button. | To create an attractive landing page and introduce the business. |
| Week 4 | 2.3 | Added menu/product sections for coffee, tea, hot chocolate, pastries, sandwiches and light meals. | To display the products offered by Le Petite Coffee. |
| Week 4 | 2.4 | Added the About Us page with the business background, mission, vision and target audience. | To provide visitors with information about the organisation. |
| Week 4 | 2.5 | Added the Enquiry page and enquiry form. | To allow customers to submit questions or requests. |
| Week 5 | 2.6 | Added the Contact Us page with location, contact information and social media sections. | To provide customers with ways to find and contact the business. |
| Week 5 | 2.7 | Created the external `css/style.css` stylesheet. | To keep the design consistent across all five pages. |
| Week 5 | 2.8 | Applied the brown, cream, white and dark green colour scheme. | To maintain the planned visual identity. |
| Week 6 | 2.9 | Improved the design by adding cards, rounded corners, shadows, spacing and hover effects. | To make the website more creative and professional. |
| Week 6 | 2.10 | Added coffee imagery and improved the hero section. | To strengthen the coffee-shop theme and improve visual appeal. |
| Week 6 | 2.11 | Added responsive CSS for tablets and mobile devices. | To ensure that the website can be viewed on different screen sizes. |
| Week 7 | 2.12 | Added the Google Maps location functionality. | To help customers find the coffee shop's location. |
# 2. Development Timeline

## - Initial Website Planning and CSS Preparation

### Changes Made

The first stage involved planning the visual appearance of the Le Petite Coffee website based on the website proposal.

The main design requirements identified were:

- Warm coffee-shop appearance.
- Simple and clear navigation.
- Consistent colours across all pages.
- Readable typography.
- Professional presentation of products.
- Clear buttons and calls to action.
- Responsive design for different devices.

An external stylesheet named `style.css` was created inside the `css` folder.

### CSS Structure

The stylesheet was organised into numbered sections so that related styling rules could be grouped together.

The planned sections included:

1. General website styling
2. Headings
3. Navigation
4. Hero section
5. Buttons
6. General sections
7. Page headers
8. Introduction
9. Featured products
10. Images
11. Menu
12. About page
13. Forms
14. Contact details
15. Map
16. Social media
17. Call to action
18. Footer
19. Responsive design

### Reason for Change

Organising the CSS from the beginning made the stylesheet easier to understand and allowed individual parts of the website to be changed without affecting unrelated sections.

---

# - General Styling and Branding

## Changes Made

The basic styling for the entire website was implemented.

A universal CSS reset was added:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}