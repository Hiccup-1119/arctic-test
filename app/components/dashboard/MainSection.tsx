export function MainSection() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="./video/1.mp4" // Replace with your video URL
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col top-1/2 left-[30px]">
          <div className="text-white text-[70px] font-bold">
            Great things never came
            <br />
            from comfort zones.
          </div>
          <a
            href="/collections/all"
            className="w-[160px] h-[50px] bg-white rounded-[10px] flex justify-center items-center font-bold text-[16px]"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="bg-black text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="flex gap-6 px-4 animate-marquee">
          <span>★ High Quality Ingredients</span>
          <span>★ Independently Certified</span>
          <span>★ Expert Driven</span>
          <span>★ Shipped Internationally</span>
          <span>★ High Quality Ingredients</span>
          <span>★ Independently Certified</span>
          <span>★ Expert Driven</span>
          <span>★ Shipped Internationally</span>
        </div>
      </footer>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
