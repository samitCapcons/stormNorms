import HeroSection from "@/components/Landing/heroSection";
import ServiceSectionCard from "@/components/serviceCard";
import { cardsData, startupCardsData } from "@/lib/data";
import backgroundGreen from "@/assets/images/GreenRectangle.png";
import woodlandImage from "@/assets/images/WoodlandDivide.png";
import StartupCards from "@/components/StartupsCard";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      {/* Service Section  */}
      <div className="bg-gray-50 py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            We help our clients
          </h2>
        </div>
        <div className="flex justify-evenly flex-wrap gap-8">
          {cardsData.map((item, index) => {
            return (
              <ServiceSectionCard
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>

      {/* New Section  */}
      <div
        className="relative overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundGreen.src})` }} // Ensure background image covers the entire height
      >
        {/* Skewed white background shape */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />

        <div className="mx-auto max-w-7xl h-auto px-6 py-16  lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-lg w-full lg:w-1/2 mb-10 lg:mb-0">
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl mb-6 text-center lg:text-left">
              Our Work | Customer who believed in Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 text-center lg:text-left">
              Proven model for corporate venture at Woodland
            </h1>
            <p className="text-lg leading-8 text-white max-w-lg mb-10 text-center lg:text-left">
              We help startups, influential organizations ideate, invent,
              launch, and scale their businesses. We help our clients put
              customer first and stay agile.
            </p>
            <div className="flex items-center justify-center lg:justify-start relative">
              <a
                href="#"
                className="relative rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-sm"
              >
                Explore our culture
              </a>
            </div>
          </div>

          {/* Right Side: Image Content */}
          <div className="w-full lg:w-1/2 h-full">
            <img
              alt="Image Placeholder"
              src={woodlandImage.src}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Startup showcase Section */}
      <div className="bg-gray-50 py-32">
        <div className="flex justify-evenly flex-wrap gap-8">
          {startupCardsData.map((item, index) => {
            return (
              <StartupCards
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl} 
                timeRead={item.timeRead}            
                 />
            );
          })}
        </div>
      </div>
    </div>
  );
}
