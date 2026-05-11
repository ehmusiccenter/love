import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, Loader2 } from "lucide-react";

// Animation settings consistent with your other pages
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Using your specific Medium handle
  const MEDIUM_FEED_URL = "https://medium.com/feed/@eh_music";

  useEffect(() => {
       fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_URL}&t=${Date.now()}&nocache=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setPosts(data.items);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Medium feed:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {/* Header Section - Styled to match your EH Music theme */}
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
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <p>正在從 Medium 載入最新文章...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: any, i) => (
                <motion.article
                  key={post.guid}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="card-elevated group flex flex-col"
                >
                  {/* Article Thumbnail */}
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                    src={post.thumbnail || "/placeholder.svg"} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                   />
                 </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      Medium 文章
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.pubDate.split(' ')[0]}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>

                  {/* Clean Excerpt (strips HTML tags) */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {post.description.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      在 Medium 閱讀全文 <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
