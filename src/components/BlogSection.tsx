import React from 'react';

const posts = [
  {
    title: 'Manfaat Floor Hardener untuk Lantai Industri',
    slug: '/blog/benefits-floor-hardener',
    excerpt: 'Pelajari bagaimana floor hardener meningkatkan ketahanan lantai, mengurangi biaya perawatan, dan memperpanjang umur layanan beton.',
    tag: 'Flooring',
  },
  {
    title: 'Perbedaan Liquid vs Dryshake Floor Hardener',
    slug: '/blog/liquid-vs-dryshake',
    excerpt: 'Perbandingan praktis antara liquid hardener dan dryshake agar Anda dapat memilih sistem yang paling tepat untuk proyek Anda.',
    tag: 'Panduan',
  },
  {
    title: 'Chichibu vs Floor Hardener Murah — Mana yang Lebih Unggul?',
    slug: '/blog/chichibu-vs-cheap-hardeners',
    excerpt: 'Mengapa floor hardener premium seperti Chichibu memiliki performa lebih baik dan kapan produk murah masih bisa digunakan.',
    tag: 'Perbandingan',
  },
];

const BlogSection = () => {
  console.log('BlogSection mounted');

  return (
    <section
      id="blog"
      className="relative py-20 bg-secondary"
    >
      {/* Gradient overlay like HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Artikel Terbaru dari Blog Kami
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Informasi, panduan, dan perbandingan seputar floor hardener, perbaikan lantai industri, serta solusi Chichibu Jepang.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-md p-6 border border-slate-200 dark:border-slate-700 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium uppercase text-slate-500">{post.tag}</span>
                <span className="text-xs text-slate-400">3 menit baca</span>
              </div>

              <h3 className="text-lg font-semibold leading-snug mb-2 text-foreground">
                {post.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {post.excerpt}
              </p>

              <a
                href={post.slug}
                className="inline-block text-sm font-medium text-primary underline decoration-2 decoration-primary/30 hover:decoration-primary/60"
              >
                Baca selengkapnya →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-block px-8 py-3 rounded-full border border-slate-300 hover:bg-white/40 dark:hover:bg-slate-700/50 transition font-medium"
          >
            Lihat Semua Artikel
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
