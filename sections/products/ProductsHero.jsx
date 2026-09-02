"use client";

function ProductsHero({ bgImg, heading, highlight, description }) {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={bgImg}
          alt="Exclusive Offers"
          className="w-full sm:h-[600px] h-[400px] object-cover object-[center_40%]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 sm:bg-black/0 bg-black/50" />

        <div className="absolute inset-0 flex items-center lg:pl-16 pl-5">
          <div className="flex max-w-lg flex-col sm:gap-5 gap-4 sm:text-black text-white">
            <h1 className="sm:text-6xl text-4xl font-extrabold space-grotesk">
              {heading}{" "}
              <span className="sm:text-white text-froozen">{highlight}</span>
            </h1>

            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
