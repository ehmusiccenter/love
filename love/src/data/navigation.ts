/**
 * Navigation items
 * WordPress equivalent: Appearance > Menus (wp_nav_menu)
 */

export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "關於我們", href: "/about" },
  { label: "課程簡介", href: "/courses" },
  { label: "辦學理念", href: "/philosophy" },
  { label: "網誌", href: "/blog" },
  { label: "聯絡我們", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "關於我們", href: "/about" },
  { label: "課程簡介", href: "/courses" },
  { label: "網誌", href: "/blog" },
  { label: "聯絡我們", href: "/contact" },
];
