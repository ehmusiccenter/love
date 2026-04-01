import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPostListings, categoryColors } from "@/data/blog-posts";

/**
 * Blog listing → WordPress: archive.php or home.php
 * Dynamic content: WP_Query → get_posts() loop
 * Each card maps to a post with:
 *   - the_title(), the_excerpt(), the_date()
 *   - category taxonomy
 *   - ACF field: read_time
 */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Blog = () => (
  <>
    <section className="relative bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
        >
          網誌
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-primary-foreground/80"
        >
          音樂教育資訊、學習技巧與中心最新動態
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostListings.map((post, i) => (
            <motion.article
              key={post.id}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-elevated group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">閱讀時間：{post.readTime}</span>
                <Link to={`/blog/${post.id}`} className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  閱讀全文 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
