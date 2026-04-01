# WordPress Theme Conversion Guide

## Folder Structure Mapping

```
React (src/)                    →  WordPress Theme
─────────────────────────────────────────────────────
components/Layout.tsx           →  (not needed — WP handles this via template hierarchy)
components/SiteHeader.tsx       →  header.php
components/SiteFooter.tsx       →  footer.php

pages/Index.tsx                 →  front-page.php
pages/About.tsx                 →  page-about.php
pages/Courses.tsx               →  page-courses.php
pages/Philosophy.tsx            →  page-philosophy.php
pages/Blog.tsx                  →  home.php (or archive.php)
pages/BlogPost.tsx              →  single.php
pages/Contact.tsx               →  page-contact.php
pages/NotFound.tsx              →  404.php

data/site-config.ts             →  Theme Options (ACF Options Page) or Customizer
data/navigation.ts              →  Appearance > Menus (wp_nav_menu)
data/courses.ts                 →  Custom Post Type "course" + ACF fields
data/testimonials.ts            →  Custom Post Type "testimonial" + ACF fields
data/blog-posts.ts              →  Built-in Posts (post type "post")
data/faq.ts                     →  ACF Repeater on Contact page or CPT "faq"
data/about.ts                   →  ACF fields on About page
data/philosophy.ts              →  ACF fields on Philosophy page
data/homepage.ts                →  ACF fields on Front Page

index.css                       →  style.css (main theme stylesheet)
tailwind.config.ts              →  style.css (compiled Tailwind output)
assets/                         →  Theme /assets/ or /images/ folder
```

## Static vs Dynamic Content

### Static (UI Templates — convert to PHP template files)
- **SiteHeader** → `header.php` — site logo, navigation menu, WhatsApp CTA
- **SiteFooter** → `footer.php` — footer nav, contact info, copyright
- **Layout** → handled by `get_header()` / `get_footer()` in each template
- **Page section structures** — hero banners, card grids, CTA sections

### Dynamic (Content from WordPress CMS)
- **Site config** (name, phone, email, address) → Theme Customizer or ACF Options
- **Navigation menus** → `wp_nav_menu()` with registered menu locations
- **Blog posts** → WordPress built-in posts (`WP_Query`, `the_loop()`)
- **Course data** → Custom Post Type `course` with ACF fields
- **Testimonials** → Custom Post Type `testimonial`
- **FAQ items** → ACF Repeater field on Contact page
- **Page-specific content** (About intro, Philosophy items) → ACF fields per page
- **Hero content** → ACF fields on Front Page

## Custom Post Types Needed

### 1. Course (`course`)
```php
register_post_type('course', [
    'labels' => ['name' => '課程'],
    'public' => true,
    'supports' => ['title', 'editor', 'thumbnail'],
]);
```
ACF Fields: `emoji`, `tag`, `details` (repeater), `description`

### 2. Testimonial (`testimonial`)
```php
register_post_type('testimonial', [
    'labels' => ['name' => '學員評價'],
    'public' => true,
    'supports' => ['title', 'editor'],
]);
```
ACF Fields: `reviewer_name`, `reviewer_role`, `review_text`

## ACF Field Groups

### Theme Options (Global)
- Site phone, email, address, WhatsApp URL
- Social media links (Facebook, Instagram)
- Google Maps embed URL

### Front Page Fields
- Hero: subtitle, title, tagline, CTA buttons
- Feature items (repeater): icon, title, description
- Section headings

### About Page Fields
- Intro paragraph 1, paragraph 2
- Core values (repeater): title, description
- Highlights (repeater): icon, title, description

### Philosophy Page Fields
- Items (repeater): icon, title, content

### Contact Page Fields
- FAQ items (repeater): question, answer

## Menu Locations
```php
register_nav_menus([
    'primary'  => 'Primary Navigation',  // mainNavItems
    'footer'   => 'Footer Navigation',   // footerNavItems
]);
```

## CSS/Styling
- Compile Tailwind CSS to a single `style.css`
- Keep the CSS custom properties (HSL design tokens) in `style.css`
- Font imports (Playfair Display, Inter) stay in theme `<head>`

## Component → Template Part Mapping
Reusable sections can become WordPress template parts:
- `template-parts/hero-banner.php` — reused across page templates
- `template-parts/course-card.php` — single course card in loop
- `template-parts/testimonial-card.php` — single testimonial in loop
- `template-parts/faq-item.php` — single FAQ accordion item
