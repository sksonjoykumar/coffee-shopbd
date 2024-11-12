import React from "react";
import historyImg from "../../assets/images/about.jpg";

function OurHistory() {
  return (
    <div className="px-4 md:px-20">
      <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full">
        <div className="w-auto lg:w-[40%]">
          <img src={historyImg} alt="img" className="rounded-md w-full h-80" />
        </div>
        <div className="w-auto lg:w-[60%]">
          <h1 className="font-inter  text-3xl md:text-4xl font-semibold text-[#563B2A] mb-1">
            Our History
          </h1>
          <p className="text-base text-gray-700 leading-6">
            The history of coffee dates back centuries in Ethiopia and Yemen. It
            was already known in Mecca in the 15th century. Also, in the 15th
            century, Sufi monasteries in Yemen employed coffee as an aid to
            concentration during prayers.[1] Coffee later spread to the Levant
            in the early 16th century; it caused some controversy on whether it
            was halal in Ottoman and Mamluk society. Coffee arrived in Italy the
            second half of the 16th century through commercial Mediterranean
            trade routes, while Central and Eastern Europeans learned of coffee
            from the Ottomans. By the mid 17th century, it had reached India and
            the East Indies.
          </p>
          <p className="text-base text-gray-700 leading-6">
            By 1852, Brazil became the world's largest producer of coffee and
            has held that status ever since. The period since 1950 saw the
            widening of the playing field owing to the emergence of several
            other major producers, notably Colombia, Ivory Coast, Ethiopia, and
            Vietnam; the latter overtook Colombia and became the second-largest
            producer in 1999. Modern production techniques.
          </p>
          <button
            type="button"
            className="bg-[#563B2A] px-3 py-1.5 text-white text-sm rounded-md mt-4 hover:bg-[#714e39] transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurHistory;
