import { FC } from "react";
import { useState } from "react";

interface PropsBanner {
  imgBanner: string;
}

const Banner: FC<PropsBanner> = ({ imgBanner }) => {
  const [reading, setReading] = useState<boolean>(false);

  return (
    <>
      <div className="block border-b-1 pb-6 lg:grid grid-cols-6">
        <img
          src={imgBanner}
          alt="..."
          className="mb-4 rounded-xl col-span-3 xl:col-span-4 "
        />
        <div
          className={
            reading
              ? "text-xs pl-6 pr-6 tracking-wider col-span-3 lg:col-span-2 text-scroll"
              : "text-xs pl-6 pr-6 tracking-wider col-span-3 lg:col-span-2"
          }
        >
          There’s a new trend every year, but you don’t have to spend much time
          figuring it out. If you’re looking for what’s hot right now, then
          Perfumania has you covered with the best-selling men’s cologne. We
          stock the best scents from the greatest names in the business, and all
          of our top sellers are ready for you! From musk and woods to vibrant
          and
          {reading ? (
            <div>
              fresh scents, Perfumania has it all. We’re here to make sure you
              smell your best, and we strive to deliver the best experience to
              every customer. Check out our best-selling colognes & fragrances
              for men, and see what discerning noses around the world are
              smelling right now!
              <button
                className="border-b-2 border-black mx-3"
                onClick={() => setReading(false)}
              >
                Read less
              </button>
            </div>
          ) : (
            <div>
              <button
                className="border-b-2 border-black mx-3"
                onClick={() => setReading(true)}
              >
                Read more
              </button>
            </div>
          )}
        </div>
      </div>

      <hr />
    </>
  );
};

export default Banner;
