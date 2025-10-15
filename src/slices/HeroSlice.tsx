import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

type HeroSliceProps = {
  slice: {
    primary: {
      title: any;
      description: any;
      image: any;
      ctatext?: string;
      ctalink?: string;
    };
  };
};

const HeroSlice = ({ slice }: HeroSliceProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-50 overflow-hidden py-24">
      {/* Background Image */}
      {slice.primary.image && (
        <PrismicNextImage
          field={slice.primary.image}
          className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm brightness-100"
          alt={slice.primary.image.alt ?? ""}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 ">
        <div className="max-w-2xl mx-auto">
          {slice.primary.title && (
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    {children}
                  </h1>
                ),
              }}
            />
          )}

          {slice.primary.description && (
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                    {children}
                  </p>
                ),
              }}
            />
          )}
        </div>

        {slice.primary.ctatext && slice.primary.ctalink && (
          <a
            href={slice.primary.ctalink}
            className="rounded-md bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition"
          >
            {slice.primary.ctatext}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSlice;
