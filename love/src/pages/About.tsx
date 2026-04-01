import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import { aboutIntro, coreValues, highlights } from "@/data/about";

/**
 * About page → WordPress: page-about.php
 * Dynamic content:
 *   - Intro paragraphs: the_content() or ACF fields
 *   - Core values: ACF Repeater
 *   - Highlights: ACF Repeater
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={aboutBg} alt="Violin and sheet music" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          關於我們
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-lg"
          style={{ color: "hsl(0 0% 100% / 0.8)" }}
        >
          在你的音樂之旅中一路陪伴
        </motion.p>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <p className="text-lg text-foreground leading-relaxed">{aboutIntro.paragraph1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{aboutIntro.paragraph2}</p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase gold-accent mb-2">辦學理念</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">我們的核心理念</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((v, i) => (
            <motion.div key={v.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-elevated">
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-elevated text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
