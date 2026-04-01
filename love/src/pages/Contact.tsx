import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/site-config";

/**
 * Contact page → WordPress: page-contact.php
 * Dynamic content:
 *   - Contact info: theme options (ACF Options Page) → siteConfig
 *   - FAQ: ACF Repeater or CPT "faq"
 *   - Social links: theme options
 *   - Map: ACF Google Map field or embed URL option
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            聯絡我們
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">聯絡資訊</h2>
              <div className="space-y-5">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">電話 / WhatsApp</p>
                    <p className="font-medium">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">電郵</p>
                    <p className="font-medium">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">地址</p>
                    <p className="font-medium">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">交通</p>
                    <p className="font-medium">{siteConfig.transport}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                  WhatsApp 聯絡我們
                </a>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EH Music Center location"
                />
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">常見問題</h2>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <div key={i} className="card-elevated !p-0 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-4 flex items-center justify-between font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">🎵</span> {item.q}
                      </span>
                      <span className="text-xl">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-sm text-muted-foreground">{item.a}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">追蹤我們</h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity text-sm font-bold"
                  >
                    f
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity text-sm font-bold"
                  >
                    ig
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
