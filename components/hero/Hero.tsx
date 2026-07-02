"use client";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroAstronaut from "./HeroAstronaut";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
     {/* Left Column: Text & Buttons */}
<div className="lg:col-span-7 flex flex-col items-start justify-center space-y-6 z-20 w-full">
  <HeroText />
  <HeroButtons />
</div>

        {/* Right Column: Visuals (Spans 5 columns on desktop) */}
        {/* Hidden on small screens to keep mobile layout clean */}
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center z-10">
          <HeroAstronaut />
        </div>
        
      </div>
    </section>
  );
}