import React from "react"; // Import Tailwind CSS styles

function Shaping() {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto">
        <section className="flex flex-col md:flex-row justify-between py-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-primary-main">
              Shaping Organizations, Empowering New Possibilities
            </h2>
            <p className="text-lg">
              Discover how your organization can become a certified conscious
              organization and join a trusted, reliable global eco-system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/shaping1.png"
                alt="Icon 1"
                className="w-[72px] h-[46px]"
              />
              <div className="text-center pt-[20px]">
                <h3 className="text-lg font-bold text-primary-main">
                  Elevate with best practices
                </h3>
                <p className="text-sm text-primary-main">
                  Lead in quality and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/shaping4.png"
                alt="Icon 2"
                className="w-[57px] h-[65px]"
              />
              <div className="text-center pt-[20px]">
                <h3 className="text-lg font-bold text-primary-main">
                  Accelerate with confidence
                </h3>
                <p className="text-sm text-primary-main">
                  Drive impactful results.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/shaping2.png"
                alt="Icon 3"
                className="w-[62px] h-[65px]"
              />
              <div className="text-center pt-[20px]">
                <h3 className="text-lg font-bold text-primary-main">
                  Innovate with precision
                </h3>
                <p className="text-sm text-primary-main">
                  Explore new frontiers.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/shaping3.png"
                alt="Icon 4"
                className="w-[55px] h-[60px]"
              />
              <div className="text-center pt-[20px]">
                <h3 className="text-lg font-bold text-primary-main">
                  Collaborate for success
                </h3>
                <p className="text-sm text-primary-main">
                  Achieve more together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shaping;
