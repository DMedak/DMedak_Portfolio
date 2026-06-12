import Section from "@/app/components/Section";

export default function HeroSection() {
  return (
    <Section id="home">
            <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
                Duje Medak Portfolio
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl pt-16">
                Building software. <br />Learning constantly. <br />Creating <span className="text-lime-300">interactive experiences.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-2xl text-gray-400">
                Computer Science graduate student focused on building modern web applications, software systems and interactive experiences.
            </p>
        </Section>
  )
}
