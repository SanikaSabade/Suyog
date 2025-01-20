import React from "react";

const HeroCard = () => {
  return (
    <div className="relative z-30 w-full bg-primarybg font-manrope ">
      <div className="max-w-7xl mx-auto px-4 -translate-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-blue-950 rounded-lg flex flex-col items-center p-4">
            <div className="text-2xl bg-primaryYellow text-center text-black font-bold rounded-md p-1">
              <h3>PRODUCT & CUSTOM DESIGNING</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-2">
              <p className="font-semibold text-center">IT IS THE EXECUTION OF THE IDEA WHICH MAKES YOU SUCCESSFUL</p>
              <p className="text-justify p-2">
                The Products we make involves design complexity and close tolerances.
                We also offer a custom design service whereby our customers are engaged
                from the design stage all the way through to the manufacturing process,
                using our CAD and tooling development processes.
              </p>
            </div>
          </div>

          <div className="bg-blue-950 rounded-lg flex flex-col items-center p-4">
            <div className="text-2xl bg-primaryYellow text-center text-black font-bold p-5 rounded-md">
              <h3>MOULD MANUFACTURING</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-3">
              <p className="font-semibold text-center">GREAT THINGS ARE DONE BY A SERIES OF SMALL THINGS BROUGHT TOGETHER</p>
              <p className="text-justify p-2">
                Our engineering team validate CAD data & with the help of mould flow facility
                we provide feedback on possible quality issues or areas in need of improvement
                to produce exceptional quality parts.
              </p>
            </div>
          </div>

          <div className="bg-blue-950 rounded-lg flex flex-col items-center p-3">
            <div className="text-2xl bg-primaryYellow text-center text-black font-bold px-28 py-6 rounded-md">
              <h3>MOULDING</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-3">
              <p className="font-semibold text-center">PERFECTION IS ACHIEVED NOT WHEN THERE IS NOTHING MORE TO ADD</p>
              <p className="text-justify p-2">
                Our advanced level of injection molding process relies on our deep knowledge
                of material behavior, trained work force and advanced injection molding
                equipment and controls.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCard;
