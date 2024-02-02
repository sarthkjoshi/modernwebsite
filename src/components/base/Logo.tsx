import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="mt-4 ">
      <Image src="next.svg" width={60} height={90} alt="logo"></Image>
    </div>
  );
}
