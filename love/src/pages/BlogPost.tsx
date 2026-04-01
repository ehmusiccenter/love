import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPostContent } from "@/data/blog-posts";

/**
 * Single blog post → WordPress: single.php
 * Dynamic content:
 *   - the_title(), the_date(), the_content()
 *   - ACF fields: read_time
 *   - category taxonomy
 */

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostContent[id] : null;

  if (!post) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">文章未找到</h1>
        <Link to="/blog" className="btn-hero-primary">返回網誌</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回網誌
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground"
          >
            {post.title}
          </motion.h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span className="px-2 py-0.5 rounded-full bg-primary-foreground/20 text-xs">{post.category}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <article className="container mx-auto max-w-3xl prose prose-lg">
          {post.content.map((paragraph, i) => {
            const parts = paragraph.split(/\*\*(.*?)\*\*/g);
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-foreground leading-relaxed mb-4"
              >
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-primary font-semibold">{part}</strong> : part
                )}
              </motion.p>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default BlogPost;
