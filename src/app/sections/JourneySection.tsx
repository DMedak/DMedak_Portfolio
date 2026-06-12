import Section from "@/app/components/Section";

export default function JourneySection() {
  return (
    <Section id="journey">
              <h2 className="text-3xl font-bold">Journey</h2>
    
              <div className="mt-10 space-y-8">
                <div className="border-l border-cyan-400 pl-6">
                  <p className="text-cyan-400">2024</p>
    
                  <h3 className="mt-2 text-2xl font-semibold">
                    Graduate Studies
                  </h3>
    
                  <p className="mt-2 text-zinc-400">
                    Continuing education in Computer Science and software
                    engineering.
                  </p>
                </div>
    
                <div className="border-l border-cyan-400 pl-6">
                  <p className="text-cyan-400">2025</p>
    
                  <h3 className="mt-2 text-2xl font-semibold">
                    Portfolio & Game Development
                  </h3>
    
                  <p className="mt-2 text-zinc-400">
                    Building advanced frontend projects and learning Unreal Engine.
                  </p>
                </div>
              </div>
          </Section>
    )
}    