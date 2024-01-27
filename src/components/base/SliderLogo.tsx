"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";
export default function SliderLogo() {
  return (
    <div className="mt-5">
      <Slider
        width="80px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <Image src="vercel.svg" width={72} height={72} alt="logo" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src="vercel.svg" width={72} height={72} alt="logo" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src="vercel.svg" width={72} height={72} alt="logo" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src="vercel.svg" width={72} height={72} alt="logo" />
        </Slider.Slide>
      </Slider>
    </div>
  );
}
