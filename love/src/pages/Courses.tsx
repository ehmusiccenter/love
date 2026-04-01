import { motion } from "framer-motion";
import { courseDetails, courseFeatures } from "@/data/courses";
import { siteConfig } from "@/data/site-config";

/**
 * Courses page → WordPress: page-courses.php
 * Dynamic content:
 *   - Course list: WP_Query on CPT "course"
 *   - Course features: ACF Repeater on this page
 *   - Course type badges: taxonomy or ACF fields
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Courses = () => (
  <>
    <section className="relative bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
        >
          課程簡介
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-primary-foreground/80"
        >
          所有課程均於隔音琴房進行，配備 Fryderyk Buchholtz, Seiler 等名琴
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground">🔹 兒童課程：音樂啟蒙＋英皇考級（ABRSM 1-8級）</span>
            <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground">🔹 成人課程：興趣班／陪練／考級衝刺</span>
            <span className="px-4 py-1.5 rounded-full bg-muted text-muted-foreground">🔹 陪練課程：專屬導師陪同練習</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {courseDetails.map((c, i) => (
            <motion.div key={c.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <span className="text-xs tracking-wider uppercase gold-accent">{c.tag}</span>
                  <h3 className="font-display text-xl font-bold text-foreground">{c.name}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {c.details.map((d, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-secondary mt-0.5">►</span> {d}
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary text-sm mt-4 inline-block"
              >
                了解更多
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseFeatures.map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-elevated">
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-center">
      <motion.div {...fadeUp}>
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">立即預約試堂！</h2>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
          WhatsApp 預約
        </a>
      </motion.div>
    </section>
  </>
);

export default Courses;
