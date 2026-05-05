# 🛍️ Shopify Custom Theme – SR Components

This project is a custom Shopify theme built on top of the **Dawn theme**, designed to demonstrate modular development, dynamic customization, and clean architecture using Shopify Liquid.

---

## 🚀 Overview

The theme includes fully customizable sections built with scalability and reusability in mind.
Each section is designed to be configurable from the Shopify customizer and optimized for both desktop and mobile.

---

## 🔗 Links

* 🌐 **Live Store:** [View Store](https://soumya-ranjan-nayak-48-teststore.myshopify.com/)


## 🧱 Folder Structure

```
/sections
  ├── sr-header.liquid
  ├── sr-banner.liquid
  ├── sr-product-grid.liquid
  ├── sr-footer.liquid
  └── sr-text-block.liquid

/snippets
  /* HEADER */
  ├── sr-header-col.liquid
  ├── sr-header-logo.liquid
  ├── sr-header-menu.liquid
  ├── sr-header-tagline.liquid
  ├── sr-header-button.liquid

  /* BANNER */
  ├── sr-banner-content.liquid
  ├── sr-banner-button.liquid

  /* PRODUCT GRID */
  ├── product-card.liquid
  ├── product-popup.liquid

  /* FOOTER */
  ├── sr-footer-col.liquid
  ├── sr-footer-logo.liquid
  ├── sr-footer-menu.liquid
  ├── sr-footer-contact.liquid

/assets
  ├── sr-header.css
  ├── sr-banner.css
  ├── product-grid.css
  ├── sr-footer.css
  ├── sr-text-block.css
  ├── product-popup.js
```

---

## ✨ Features

### 🔹 Header (sr-header)

* Dynamic layout (logo, menu, button positions)
* Mobile responsive with hamburger menu
* Custom button with hover styles and icon support
* Tagline with typography controls
* Default logo fallback from assets

---

### 🔹 Banner (sr-banner)

* Desktop & mobile background support
* Overlay with opacity control
* 9-position content system (top-left → bottom-right)
* Customizable button styles (slide / scale / invert)
* Default fallback banner image

---

### 🔹 Product Grid + Popup

* Dynamic row & column selection
* Product selection via customizer
* Interactive popup:

  * Product image (background-based)
  * Variant selection (color + size)
  * Add-to-cart via AJAX
* Special condition logic (bonus product support)
* Custom toast notification instead of alerts
* Floating cart icon when items are added

---

### 🔹 Footer (sr-footer)

* Logo + description with full typography control
* Multiple menu support
* Contact section (phone, email, address)
* Independent alignment control (left / center / right)
* Footer bottom bar with responsive layout
* Default logo fallback

---

### 🔹 Text Block (sr-text-block)

* Fully customizable heading and description
* Typography and alignment controls
* Responsive design

---

## 🎨 UI/UX Enhancements

* Custom toast notification system (instead of browser alerts)
* Floating cart icon with live cart count
* Smooth hover animations for buttons and menus
* Responsive layout optimized for mobile devices
* Clean spacing and typography hierarchy

---

## ⚙️ Technical Highlights

* Modular architecture using **sections + snippets**
* Clean naming convention (`sr-*`) for scalability
* Separation of concerns:

  * Structure → Sections
  * Components → Snippets
  * Styling → Assets
  * Logic → JavaScript
* Shopify AJAX API used for cart interactions
* Fallback system for assets (logo, banner)

---

## 📱 Responsiveness

The theme is fully responsive with breakpoints:

* Desktop
* Tablet (≤1024px)
* Mobile (≤768px)
* Small devices (≤480px)

---

## 🔗 GitHub Integration

* Code is structured for direct GitHub integration with Shopify
* Master branch is used as the primary deployment branch

---

## 🧪 Testing Checklist

* ✅ Sections render correctly
* ✅ Mobile responsiveness verified
* ✅ Popup and cart interactions working
* ✅ No console errors
* ✅ GitHub integration successful

---

## 👨‍💻 Developer

**Soumya Ranjan Nayak**
Frontend / Shopify Developer

---

## 📌 Notes

This project focuses on demonstrating:

* Clean code structure
* Reusable component design
* Real-world Shopify development workflow

---

## 🙌 Thank You

Thank you for reviewing this submission.
Looking forward to your feedback!
