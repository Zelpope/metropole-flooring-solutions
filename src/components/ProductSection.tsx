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
 * Keeps alt text readable, descriptive, and keyword-rich
 */
const generateAltText = (
  productName: string,
  index: number,
  total: number
) => {
  return `${productName} for industrial concrete flooring – floor hardener application image ${
    index + 1
  } of ${total}`;
};

const products: Product[] = [
  {
    name: "CHICHIBU COLORCONcrete – Premium Dry Shake Floor Hardener",
    images: [
      "/images/Products/chichibu-dry-shake-floor-hardener-natural.png",
      "/images/Products/chichibu-dry-shake-floor-hardener-green.png",
    ],
    autoFade: true,
    description:
      "CHICHIBU COLORCONcrete is a premium dry shake floor hardener from Japan, engineered for industrial concrete floors that demand maximum abrasion resistance, hardness, and long-term durability. Using advanced inorganic pigments and high-grade aggregates, it delivers superior hardness and a dense, long-lasting surface.",
    uses:
      "Ideal for heavy-duty factory floors, logistics warehouses, premium showrooms, commercial parking areas, shops, and industrial facilities requiring both high performance and aesthetic concrete flooring.",
  },
  {
    name: "CHICHIBU MULTI-HARDENER – Liquid Concrete Hardener",
    images: ["/images/Products/chichibu-liquid-floor-hardener.png"],
    description:
      "CHICHIBU MULTI-HARDENER is a penetrating liquid floor hardener that reacts chemically with calcium compounds in concrete to increase surface density and hardness. It is an efficient solution for strengthening existing concrete floors with maximum abrasion resistance without demolition or re-casting.",
    uses:
      "Recommended for upgrading existing concrete floors, reducing dusting, routine floor maintenance, and light-to-medium duty industrial areas.",
  },
  {
    name: "TUFFLOOR – Dry Shake Floor Hardener",
    images: ["/images/Products/tuffloor-dry-shake-floor-hardener.png"],
    description:
      "TUFFLOOR is a dry shake floor hardener formulated with non-metallic aggregates to improve the durability and abrasion resistance of industrial concrete floors. It offers excellent performance at a competitive price point for a wide range of applications.",
    uses:
      "Suitable for warehouses, manufacturing plants, parking structures, workshops, and industrial floors exposed to light, medium, and heavy-duty traffic.",
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
      alt={`${name} for industrial concrete flooring – floor hardener product image`}
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
            Industrial Floor Hardener Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Premium dry shake and liquid floor hardener solutions engineered for
            industrial concrete floors, warehouses, factories, and commercial
            facilities.
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
      </div>
    </section>
  );
};

export default ProductSection;
