import React from "react";

export default function SecondSection() {
  return (
    <div className="flex justify-center h-[500px] mt-5">
      {/* <div className="bg-red-300 w-[300px] h-[400px] relative top-24 left-24  ">
        Text
      </div> */}
      <div>
        <video
          width="800"
          height="400"
          autoPlay
          muted
          loop
          className="rounded-2xl shadow-2xl "
        >
          <source src="videos/talking.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
