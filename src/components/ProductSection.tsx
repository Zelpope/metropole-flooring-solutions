import React, { useEffect, useState } from "react";

type Product = {
  name: string;
  images: string[];
  description: string;
  uses: string;
  autoFade?: boolean;
};

/**
 * SEO-friendly alt text generator
 * Optimized for "High-Quality" and "Mohs 8" keywords
 */
const generateAltText = (
  productName: string,
  index: number,
  total: number
) => {
  return `${productName} - High-quality Mohs 8 floor hardener application in Indonesia - image ${
    index + 1
  } of ${total}`;
};

const products: Product[] = [
  {
    name: "CHICHIBU COLORCONcrete – Premium Mohs 8 Dry Shake Hardener",
    images: [
      "/images/Products/chichibu-dry-shake-floor-hardener-natural.png",
      "/images/Products/chichibu-dry-shake-floor-hardener-green.png",
    ],
    autoFade: true,
    description:
      "CHICHIBU COLORCONcrete is a high-quality dry shake floor hardener from Japan, engineered for industrial concrete floors that demand a verified Mohs 8 hardness. This premium solution provides maximum abrasion resistance and long-term durability for high-traffic environments like the Jakarta MRT.",
    uses:
      "Ideal for heavy-duty factory floors, logistics warehouses, premium showrooms, and high-performance industrial facilities requiring the best floor hardener in Indonesia.",
  },
  {
    name: "CHICHIBU MULTI-HARDENER – Mohs 8 Liquid Concrete Hardener",
    images: ["/images/Products/chichibu-liquid-floor-hardener.png"],
    description:
      "CHICHIBU MULTI-HARDENER is a high-quality penetrating liquid floor hardener that chemically reacts with concrete to achieve a Mohs 8 hardness rating. It is the premier solution for strengthening existing concrete floors with maximum abrasion resistance and dustproofing without demolition.",
    uses:
      "Perfect for industrial floor maintenance, upgrading existing warehouse floors to Mohs 8 standards, and reducing dusting in high-performance facilities nationwide.",
  },
  {
    name: "TUFFLOOR – High-Quality Industrial Dry Shake Hardener",
    images: ["/images/Products/tuffloor-dry-shake-floor-hardener.png"],
    description:
      "TUFFLOOR is an industrial-grade dry shake floor hardener formulated with non-metallic aggregates to provide high-quality durability and abrasion resistance. It offers an excellent performance-to-cost ratio for a wide range of Indonesian industrial applications.",
    uses:
      "Suitable for warehouses and manufacturing plants in Cikarang, Karawang, and industrial zones across Indonesia exposed to light, medium, and heavy-duty traffic.",
  },
];

const AutoFadeImage = ({
  images,
  name,
}: {
  images: string[];
  name: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2500);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative h-96 bg-white overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={generateAltText(name, i, images.length)}
          className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

const StaticImage = ({
  src,
  name,
}: {
  src: string;
  name: string;
}) => (
  <div className="h-96 bg-white flex items-center justify-center">
    <img
      src={src}
      alt={`${name} - High-quality Mohs 8 industrial floor hardener product image`}
      className="w-full h-full object-contain p-8"
      loading="lazy"
    />
  </div>
);

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            High-Quality Mohs 8 Floor Hardener Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Premium dry shake and liquid floor hardener solutions engineered for
            industrial concrete floors, warehouses, factories, and commercial
            facilities in Indonesia.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Image */}
              {product.autoFade ? (
                <AutoFadeImage
                  images={product.images}
                  name={product.name}
                />
              ) : (
                <StaticImage
                  src={product.images[0]}
                  name={product.name}
                />
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3
                  className="text-xl font-semibold text-foreground"
                  itemProp="name"
                >
                  {product.name}
                </h3>

                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  itemProp="description"
                >
                  {product.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Typical Applications
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.uses}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Structured Data for AI & Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "CHICHIBU COLORCONcrete – Mohs 8 Dry Shake Hardener",
                "image": "https://metropolechichibu.com/images/Products/chichibu-dry-shake-floor-hardener-natural.png",
                "description": "High-quality Japanese dry shake floor hardener for industrial concrete floors verified at Mohs 8 hardness.",
                "brand": { "@type": "Brand", "name": "Chichibu Japan" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://metropolechichibu.com/#contact",
                  "priceCurrency": "IDR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PT Metropole Trikarya Ciptaperkasa"
                  }
                }
              },
              {
                "@type": "Product",
                "name": "CHICHIBU MULTI-HARDENER – Mohs 8 Liquid Hardener",
                "image": "https://metropolechichibu.com/images/Products/chichibu-liquid-floor-hardener.png",
                "description": "Premium liquid concrete hardener from Chichibu Japan achieving Mohs 8 hardness rating for maximum density and dustproofing.",
                "brand": { "@type": "Brand", "name": "Chichibu Japan" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://metropolechichibu.com/#contact",
                  "priceCurrency": "IDR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PT Metropole Trikarya Ciptaperkasa"
                  }
                }
              },
              {
                "@type": "Product",
                "name": "TUFFLOOR – High-Quality Dry Shake Hardener",
                "image": "https://metropolechichibu.com/images/Products/tuffloor-dry-shake-floor-hardener.png",
                "description": "High-quality non-metallic dry shake floor hardener for warehouses, factories, and industrial floors in Indonesia.",
                "brand": { "@type": "Brand", "name": "Tuffloor" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://metropolechichibu.com/#contact",
                  "priceCurrency": "IDR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PT Metropole Trikarya Ciptaperkasa"
                  }
                }
              }
            ]
          })}
        </script>
      </div>
    </section>
  );
};

export default ProductSection;