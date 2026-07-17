"use client";

import { useEffect, useRef } from "react";
import SplineScene from "@/components/SplineScene/SplineScene";
import { splineAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Hero() {

  const splineRef = useRef(null);

  useEffect(() => {
    splineAnimation(splineRef.current);
  }, []);

  return (
    <section>
      <SplineScene splineRef={splineRef} />

      <div style={{ width: "100%", height: "500px", backgroundColor: "red", zIndex: 1000, color: "white" }}>hi</div>
    </section>
  );
}