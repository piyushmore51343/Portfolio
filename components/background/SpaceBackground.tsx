"use client";

// import GradientGlow from "./GradientGlow";
import Nebula from "./Nebula";
import Stars from "./Stars";
// import FloatingParticles from "./FloatingParticles";
// import Meteors from "./Meteors";
import MouseGlow from "./MouseGlow";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
      {/* Base Gradient */}
      {/* <GradientGlow /> */}

      {/* Nebula */}
      <Nebula />

      {/* Stars */}
      <Stars />

      {/* Floating Particles */}
      {/* <FloatingParticles /> */}

      {/* Shooting Meteors */}
      {/* <Meteors /> */}

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,.35)_60%,#050816_100%)]
      "
      />
    </div>
  );
}