import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import SliderLogo from "./SliderLogo";

export default function FirstSection() {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="max-w-[740px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center ">
          <div className="text-4xl md:text-[60px]   text-center ">
            AI-powered video creations at scale
          </div>

          <p className="max-w-[450px] text-[16px] md:text-[24px] text-center mt-4">
            Effortlessly produce studio quality videos with AI- generated
            avatars and voices.
          </p>

          <div className="">
            <Button>
              Get started for free <ArrowRight />
            </Button>
            <p>No credit card needed</p>
          </div>
        </div>
        <div className="w-[400px] md:w-full ">
          <SliderLogo />
        </div>
      </div>
    </div>
  );
}
