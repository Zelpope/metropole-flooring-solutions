import React from 'react';
import { Link } from 'react-router-dom';

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  tag: string;
};

const posts: Post[] = [
  {
    title: 'Apa Itu Floor Hardener? Panduan Lengkap Jenis dan Cara Memilih Produk yang Tepat',
    slug: '/blogs/apa-itu-floor-hardener-panduan-lengkap',
    excerpt: 'Panduan lengkap memahami floor hardener, jenis-jenisnya, dan cara memilih produk yang tepat untuk kebutuhan industri Anda.',
    tag: 'Floor hardener',
  },
];

const BlogSection: React.FC = () => {
  console.log('BlogSection mounted');

  return (
    <section id="blog" className="relative py-20 bg-secondary">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Articles</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Information, guides, and comparisons around floor hardeners. Confused on which product to pick? These can help!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-md p-6 border border-slate-200 dark:border-slate-700 transition hover:shadow-lg w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium uppercase text-slate-500">{post.tag}</span>
                <span className="text-xs text-slate-400">8 - 10 menit baca</span>
              </div>

              <h3 className="text-lg font-semibold leading-snug mb-2 text-foreground" itemProp="headline">
                {post.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4" itemProp="description">
                {post.excerpt}
              </p>

              <Link
                to={post.slug}
                className="inline-block text-sm font-medium text-primary underline decoration-2 decoration-primary/30 hover:decoration-primary/60"
                aria-label={`Read full article: ${post.title}`}
              >
                Baca selengkapnya →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-8 py-3 rounded-full border border-slate-300 hover:bg-white/40 dark:hover:bg-slate-700/50 transition font-medium"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
