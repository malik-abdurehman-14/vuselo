import { GoArrowUpRight } from "react-icons/go";

function HomeSection2() {
  const cardsData = [
    {
      img: "/sec2-1.png",
      title: "Devices & Pods",
      desc: "A considered setup. Precise, Pocketable, made to go further.",
      link: "/",
    },
    {
      img: "/sec2-2.png",
      title: "Nicotine Pouches",
      desc: "Pop. Tuck. Feel. A discreet ritual, refined",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-10 lg:px-16 px-5 py-12 bg-black text-white">
      <div className="flex sm:flex-row flex-col sm:items-end justify-between gap-5 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-froozen space-grotesk">FIND YOUR FORMAT</p>
          <p className="sm:text-4xl text-3xl font-extrabold space-grotesk">
            Made For The Way
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-froozen space-grotesk">
            You Choose.
          </p>
        </div>
        <a href="#" className="text-base text-froozen flex items-center gap-1">
          View Collection <GoArrowUpRight />
        </a>
      </div>
      {/* cards */}
      <div className="flex md:flex-row flex-col gap-5 w-full">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className="group relative w-full md:h-[500px] h-[400px] overflow-hidden rounded-xl cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bottom Black Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 sm:p-8 p-4">
              <div className="flex items-end justify-between gap-4">
                {/* Text */}
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold text-white space-grotesk">
                    {item.title}
                  </p>

                  <p className="text-base text-white/80 space-grotesk">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="p-3 border border-white rounded-md text-white ">
                  <GoArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform duration-500 group-hover:rotate-360"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSection2;
