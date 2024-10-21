import React from "react"; // Import Tailwind CSS styles

function Shaping() {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto">
        <section className="flex flex-col md:flex-row justify-between py-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-mainColor">
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
                src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
                alt="Icon 1"
                className="w-12 h-12"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-mainColor">
                  Elevate with best practices
                </h3>
                <p className="text-sm text-mainColor">
                  Lead in quality and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
                alt="Icon 2"
                className="w-12 h-12"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-mainColor">
                  Accelerate with confidence
                </h3>
                <p className="text-sm text-mainColor">
                  Drive impactful results.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
                alt="Icon 3"
                className="w-12 h-12"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-mainColor">
                  Innovate with precision
                </h3>
                <p className="text-sm text-mainColor">Explore new frontiers.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
                alt="Icon 4"
                className="w-12 h-12"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-mainColor">
                  Collaborate for success
                </h3>
                <p className="text-sm text-mainColor">Achieve more together.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shaping;
