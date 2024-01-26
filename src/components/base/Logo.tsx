import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image src="next.svg" width={50} height={50} alt="logo"></Image>
    </div>
  );
}
