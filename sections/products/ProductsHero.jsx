"use client";

function ProductsHero() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/productHero.png"
          alt="Exclusive Offers"
          className="block w-full h-auto"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center pl-16">
          <div className="flex max-w-lg flex-col gap-5 text-black">
            <p className="text-base space-grotesk">A SIMPLER RITUAL</p>

            <h1 className="text-5xl font-extrabold space-grotesk">
              Shop <span className="text-white">All</span>
            </h1>

            <p className="text-lg">
              Browse the full VUSELO range — devices, pods, and pouches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
