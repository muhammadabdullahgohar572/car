import Service from "../img/controlar/service";
import { Slickk } from "./slick";

export const Services = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Hire Car in Karachi: A Unforgettable Voyage for Tourists</h1>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_tEV-TXe7SR1hhuvPjNy8uemUeWg3D3VCw&s"
              alt="Mazar-e-Quaid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-landmark text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Mazar-e-Quaid
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A majestic white marble mausoleum, this iconic landmark serves
                as the final resting place of Pakistans founder. Its serene
                atmosphere and architectural grandeur make it a must-visit
                destination.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZgXn-Sb6oO3YEkughQZEAO33z0AIB0Eilw&s"
              alt="Frere Hall"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-building text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">Frere Hall</h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A historic building featuring stunning Victorian architecture,
                now serving as a library and art gallery. Its beautiful gardens
                provide a peaceful escape.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyeIMHYoabObsuq8k6ZZIoEnD7XpsEo88Lw&s"
              alt="St Patrick's Cathedral"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-church text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  St Patricks Cathedral
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                One of the most impressive examples of Gothic Revival
                architecture in the region, featuring stunning stained glass
                windows and towering spires.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x6EGC_9HPSe9io3NSy8CrDkx5jBqXfByQ&s"
              alt="Clifton Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-umbrella-beach text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Clifton Beach
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A popular recreational spot offering camel rides, beach
                activities, and stunning sunset views along the Arabian Sea.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d9piJWYFApYOXeGUaLLjSHfxp-IAbDbpyA&s"
              alt="PAF Museum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-plane text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Pakistan Air Force (PAF) Museum
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                Showcasing the history of Pakistans air force through aircraft
                displays, artifacts, and interactive exhibits.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PVEj96e7iBw4K79jfO7dqkXdK26WkU1tVA&s"
              alt="Empress Market"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-store text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Empress Market
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A historic British-era market known for its distinctive
                architecture and bustling bazaar atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slickk />

      {/* Service Component */}
      <Service />
    </>
  );
};
