import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import SliderLogo from "./SliderLogo";

export default function FirstSection() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="flex flex-col items-center ">
        <h1 className="text-6xl">AI-powered video </h1>
        <h1 className="text-6xl">creations at scale</h1>
        <p className="text-xl mt-3">
          Effortlessly produce studio quality videos
        </p>
        <p className="text-xl ">with AI-generated avatars and voices.</p>
      </div>
      <div className="flex-col mt-4 ">
        <Button>
          Get started for free <ArrowRight />
        </Button>
        <p>No credit card needed</p>
      </div>
      <SliderLogo />
    </div>
  );
}
