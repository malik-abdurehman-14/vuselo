"use client";

import { HiMiniLink } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function BlogDetails() {
  return (
    <div className="w-full">
      {/* img-top */}
      <div className="">
        <img
          className="h-[600px] w-full object-cover object-[center_40%]"
          src="/about2.png"
          alt=""
        />
      </div>
      <div className="flex justify-center w-full px-16 pb-14 bg-gray-50">
        {/* details-card */}
        <div className="w-full bg-[#FAFAFA] rounded-xl p-8 -mt-24 flex flex-col gap-3 shadow-2xl">
          <div className="bg-froozen text-black py-1 px-4 text-xs rounded-md w-fit">
            Devices
          </div>
          <p className="text-2xl space-grotesk font-bold group-hover:text-froozen">
            Battery Care, Made Simple.
          </p>
          <div className="text-xs flex items-center gap-2">
            <p>VUSELO Product Team . </p>
            <p>18 June 2025 . </p>
            <p>4 min read</p>
          </div>
          <p className="text-base my-2">
            Your device does a lot for you. A little care goes a long way.
            Here's how to keep things running smooth — no tools, no fuss, just a
            couple of habits that stick.
          </p>
          <p className="text-lg space-grotesk font-bold">
            Charge smart, not hard
          </p>
          <p className="text-base">
            Modern batteries perform best when they aren't pushed to extremes.
            Avoid leaving your device plugged in overnight, and try to
            disconnect the charger shortly after it reaches full capacity. This
            simple habit preserves the lithium-ion cell for hundreds of extra
            cycles.
          </p>
          <p className="text-2xl space-grotesk font-bold my-2 border-l-4 border-froozen pl-4">
            "One charge. One full day. That's the goal."
          </p>
          <p className="text-lg space-grotesk font-bold">
            Clean contacts, clear airflow
          </p>
          <p className="text-base">
            Over time, small dust particles or condensed vapor can settle on the
            charging terminals. A quick wipe with a dry cotton swab once a week
            ensures optimal connection and keeps currents stable during power
            delivery.
          </p>
          <img
            className="w-full h-[350px] object-cover  object-[center_45%] rounded-xl"
            src="/about2.png"
            alt=""
          />
          <p className="text-sm -mt-1 mb-2 text-gray-600">
            Airflow pathways and electrical contacts should stay free of debris.
          </p>
          <p className="text-lg space-grotesk font-bold">Store it right</p>
          <p className="text-base">
            Extreme temperatures are the natural enemy of any portable
            electronic battery. Leaving your device in a hot car glovebox or out
            in freezing winter conditions degrades the chemical integrity
            rapidly. Keep it in a pocket or bag at normal room temperature.
          </p>
          {/* box */}
          <div className="p-3 bg-[#FFFFFF] border border-gray-300 rounded-lg my-2">
            <p className="textlg font-bold">Quick Maintenance Routine</p>
            <p>1. Charge before it dies completely.</p>
            <p>2. Wipe the contacts once a week.</p>
            <p>3. Keep it out of direct heat.</p>
          </div>
          {/* box-2 */}
          <div className="p-3 bg-[#FFFFFF] flex items-center gap-3 border border-gray-300 rounded-lg my-2">
            <div className="bg-froozen rounded-full p-3 text-black font-bold">
              VP
            </div>
            <div>
              <p className="text-base font-bold">VUSELO Product Team</p>
              <p className="text-xs">Product & Device Experts</p>
            </div>
          </div>
          {/* links */}
          <div className="flex items-center justify-between gap-8 w-full my-4">
            <p>Share this article</p>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="bg-froozen text-black font-bold p-2 rounded-full"
              >
                <HiMiniLink />
              </a>
              <a
                href="#"
                className="bg-froozen text-black font-bold p-2 rounded-full"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="bg-froozen text-black font-bold p-2 rounded-full"
              >
                <RiInstagramFill />
              </a>
            </div>
          </div>
          {/* alert */}
          <div className="w-full bg-[#E63946] rounded-lg p-3 text-sm text-white font-bold">
            This product contains nicotine. Nicotine is an addictive substance.
            For adult use only (18+).
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
