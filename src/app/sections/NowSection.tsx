import Section from "@/app/components/Section";

export default function NowSection() {
  return (
    <Section id="now">
              <h2 className="text-3xl font-bold">Now</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold">Learning</h3>
    
                  <ul className="mt-4 space-y-3 text-zinc-400">
                    <li>Advanced React Patterns</li>
                    <li>System Design</li>
                    <li>Unreal Engine C++</li>
                  </ul>
                </div>
    
                <div>
                  <h3 className="text-2xl font-semibold">Building</h3>
    
                  <ul className="mt-4 space-y-3 text-zinc-400">
                    <li>Interactive Portfolio</li>
                    <li>Extraction Shooter Prototype</li>
                    <li>Full-stack Projects</li>
                  </ul>
                </div>
              </div>
          </Section>
    )
}