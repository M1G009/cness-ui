import React from "react";
import Button from "../common/Button";
import { FaCircleChevronRight } from "react-icons/fa6";

function TrendingConscious() {
  return (
    <div className="w-full py-[50px] bg-common-sonicSliver my-[30px]">
      <div className="container">
        <div className="flex gap-[20px]">
          <div className="w-2/5 mb-10">
            <h4 className="font-normal text-title-xsm text-primary-main">
              Trending Conscious Entertainment
            </h4>
            <h2 className="text-title-sm font-semibold text-common-black mb-4">
              Top conscious movies rated by our community <br /> to inspire you
            </h2>
            <p className="font-normal	text-title-xsm text-common-black">
              Dive into captivating stories that explore themes of mindfulness,
              compassion, and personal transformation, leaving you inspired and
              empowered.
            </p>
            <img
              src="/images/list.png"
              alt="Trending list"
              className="object-contain h-[383px] w-full"
            />
            <Button
              variant="secondary"
              Icon={FaCircleChevronRight}
              iconColor="text-primary-main"
              className="mt-4"
            >
              Rate & Share your favourites
            </Button>
          </div>
          <div className="w-3/">
            <img
              src="/images/trending-conscious.png"
              alt="Trending Conscious"
              className="object-contain h-[690px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingConscious;
