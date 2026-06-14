import Section from "@/app/components/Section";

export default function HeroSection() {
  return (
    <Section id="home">
      <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_480px]">
        {/* Left side */}
        <div className="relative z-10">
          <h1 className="max-w-[900px] text-6xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl xl:text-[4.5rem] 2xl:text-[6rem]">
            Building software. <br />
            Learning constantly. <br />
            Creating{" "}
            <span className="inline-block text-lime-300">
              interactive experiences.
            </span>
          </h1>
        </div>

        {/* Right side */}
        <div className="relative hidden lg:flex lg:justify-end cursor-default">
          <div className="absolute right-10 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative w-[480px] rounded-[2.25rem] border border-lime-300/20 bg-slate-950/70 p-8 shadow-[0_0_80px_rgba(190,242,100,0.12)] backdrop-blur-xl">
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-sm uppercase tracking-[0.32em] text-lime-300">
                Developer Profile
              </p>

              <div className="h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.85)]" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Name
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  Duje Medak
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Education
                </p>

                <p className="mt-2 text-xl leading-8 text-zinc-100">
                  Computer Science Graduate Student
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Interests
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-base text-zinc-200">
                    Programming
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-base text-zinc-200">
                    Gaming
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-base text-zinc-200">
                    Cars
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-base text-zinc-200">
                    Football
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}