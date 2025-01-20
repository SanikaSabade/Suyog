import Image from 'next/image';

const About = () => {
  return (
    <section className="p-8 bg-primaryYellow/85 relative ">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-primaryBlack p-10 flex justify-center font-manrope">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row w-full items-start">
          <div className="w-full lg:w-1/2 space-y-3 font-semibold p-10">
            <p className="text-black text-justify">
              Suyog Plastic Molding Company (SPM) has a core competency in manufacturing plastic components of a wide variety of sizes, materials, and applications.
            </p>
            <p className="text-black text-justify">
              At SPM, we manufacture and assemble precision plastic injection molded parts for leading domestic and international OEMs (Original Equipment Manufacturers) of different market segments. We offer innovative solutions for the conversion of wood and metallic parts into engineering plastic components.
            </p>
            <p className="text-black text-justify">
            We have successfully developed more than 100+ parts. We offer a full range of precision injection molding technologies 
            including insert molding parts and dual molding parts and wire harness parts  for auto companies.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative h-[400px] flex items-end">
            <div className="absolute w-full h-full">
              <div className="absolute bottom-0 w-full h-full">
                <Image
                  src="/about1.png"
                  alt="Product Display"
                  fill
                  className="object-cover"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 30%, 30% 0)',
                  }}
                />
              </div>
              <div className="absolute bottom-0 -left-6 w-[55%] h-[55%] bg-white border-4 border-primaryYellow shadow-lg">
                <Image
                  src="/about2.png"
                  alt="Product Close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
