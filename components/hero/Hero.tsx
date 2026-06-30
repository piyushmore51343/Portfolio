import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroAstronaut from "./HeroAstronaut";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-start space-y-8 z-20">
          <HeroText />
          <HeroButtons />
        </div>

        {/* Right Column: Visuals */}
        <div className="hidden lg:flex justify-center items-center z-10">
          <HeroAstronaut />
        </div>
        
      </div>
    </section>
  );
}