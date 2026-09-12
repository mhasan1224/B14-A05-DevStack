interface HeroProps {
  banner: string;
}

export default function Hero({ banner }: HeroProps) {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 py-24">
        <div className="max-w-xl">
          {/* hero content */}
          <h1 className="text-5xl font-extrabold leading-tight text-[#0F172A]">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-6 text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="btn rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90">Explore Technologies</button>
            <button className="btn rounded-md border border-[#374151] px-6 py-2.5 text-sm font-medium text-[#374151] hover:bg-gray-50">Learn More</button>
          </div>
        </div>
        {/* banner image */}
        <div className="hidden md:block">
          <img src={banner} alt="Banner" className=""/>
        </div>
      </div>
    </section>
  );
}
