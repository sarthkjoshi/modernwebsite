"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";
export default function SliderLogo() {
  return (
    <Slider width="90px" duration={40}>
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
  );
}
