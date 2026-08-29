"use client";

function ProductsHero({ heading, highlight, description }) {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src="/productHero.png"
          alt="Exclusive Offers"
          className="block w-full h-auto"
        />

        <div className="absolute inset-0 flex items-center pl-16">
          <div className="flex max-w-lg flex-col gap-5 text-black">
            <h1 className="text-6xl font-extrabold space-grotesk">
              {heading} <span className="text-white">{highlight}</span>
            </h1>

            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
