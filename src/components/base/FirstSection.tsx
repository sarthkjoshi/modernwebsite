import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import SliderLogo from "./SliderLogo";

export default function FirstSection() {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="max-w-[740px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-4xl md:text-[60px]   text-center  leading-[1]">
            <span>AI-powered video </span>
            creations at scale
          </h1>

          <p className="max-w-[450px] text-[16px] md:text-[24px] text-center mt-4">
            Effortlessly produce studio quality videos with AI- generated
            avatars and voices.
          </p>

          <div className="mt-4">
            <Button className="shadow-xl">
              Get started for free <ArrowRight />
            </Button>
            <p>No credit card needed</p>
          </div>
        </div>
        <div className="w-[400px] md:w-full mt-9">
          <SliderLogo />
        </div>
      </div>
    </div>
  );
}
