import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

/**
 * Static UI component → WordPress: footer.php
 * - Site info → bloginfo('name'), get_theme_mod()
 * - Nav links → wp_nav_menu('footer')
 * - Contact info → theme options (ACF Options Page)
 */
const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">{siteConfig.name}</h3>
          <p className="text-sm opacity-80">{siteConfig.nameChinese}</p>
          <p className="text-sm opacity-70 mt-2">{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">快速連結</h4>
          <nav className="flex flex-col gap-2">
            {footerNavItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">聯絡資訊</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 opacity-80 hover:opacity-100">
              <Phone className="w-4 h-4" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 opacity-80 hover:opacity-100">
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-2 opacity-80">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {siteConfig.name} {siteConfig.nameChinese}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
