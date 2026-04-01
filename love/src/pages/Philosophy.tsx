import { motion } from "framer-motion";
import { philosophyItems } from "@/data/philosophy";

/**
 * Philosophy page → WordPress: page-philosophy.php
 * Dynamic content: ACF Repeater fields (title, content, icon)
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Philosophy = () => (
  <>
    <section className="relative bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
        >
          辦學理念
        </motion.h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground">在你的音樂之旅中一路陪伴</h2>
        </motion.div>

        <div className="space-y-8">
          {philosophyItems.map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-elevated flex gap-4">
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Philosophy;
