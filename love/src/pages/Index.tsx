import { motion } from "framer-motion";
import { Music, Users, Award, MapPin, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { heroContent, featureItems, sectionHeadings } from "@/data/homepage";
import { courseSummaries } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";

/**
 * Homepage → WordPress: front-page.php
 * Dynamic content sources:
 *   - Hero: ACF fields on front page
 *   - Features: ACF Repeater
 *   - Courses: WP_Query on CPT "course" (limit 6)
 *   - Testimonials: WP_Query on CPT "testimonial"
 *   - CTA: ACF fields
 */

const iconMap = { Users, Award, Music, MapPin } as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="EH Music Center piano room" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--gold))" }}
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl mb-8 italic"
            style={{ color: "hsl(0 0% 100% / 0.85)" }}
          >
            {heroContent.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to={heroContent.ctaPrimary.href} className="btn-hero-primary">{heroContent.ctaPrimary.label}</Link>
            <a href={heroContent.ctaSecondary.href} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">{heroContent.ctaSecondary.label}</a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase gold-accent mb-2">{sectionHeadings.features.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{sectionHeadings.features.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{sectionHeadings.features.desc}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-elevated text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase gold-accent mb-2">{sectionHeadings.courses.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{sectionHeadings.courses.title}</h2>
            <p className="mt-4 text-muted-foreground">{sectionHeadings.courses.desc}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSummaries.map((c, i) => (
              <motion.div key={c.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} className="card-elevated group cursor-pointer">
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses" className="btn-hero-primary">查看所有課程</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase gold-accent mb-2">{sectionHeadings.testimonials.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{sectionHeadings.testimonials.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }} className="card-elevated">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div {...fadeUp}>
            <Calendar className="w-10 h-10 mx-auto mb-4 text-primary-foreground/80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{sectionHeadings.cta.title}</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">{sectionHeadings.cta.desc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-hero-secondary">聯絡我們</Link>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">WhatsApp 預約</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
