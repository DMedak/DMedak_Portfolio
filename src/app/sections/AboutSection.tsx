import Section from "@/app/components/Section";

const focusAreas = [
  {
    title: "Web Development",
    description: "Building responsive, performant applications",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
  },
  {
    title: "Software Engineering",
    description: "Writing clean, maintainable code",
    technologies: ["Python", "Java", "C++", "C"],
  },
  {
    title: "Game Development",
    description: "Creating interactive digital experiences",
    technologies: ["Godot", "Unreal Engine", "C++"],
  },
];

const stats = [
  {
    value: "03",
    label: "Years",
    description: "Programming",
  },
  {
    value: "6",
    label: "Projects",
    description: "Completed",
  },
  {
    value: "∞",
    label: "Learning",
    description: "Never stops",
  },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_0.95fr]">
        {/* Left side */}
        <div>
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-lime-300">
            About
          </p>

          <h2 className="max-w-3xl text-5xl font-light leading-tight tracking-[-0.04em] text-zinc-200 md:text-6xl">
            Driven by{" "}
            <span className="font-semibold text-white">
              curiosity
            </span>
            <br />
            Powered by{" "}
            <span className="font-semibold text-lime-300">
              code
            </span>
          </h2>

          <div className="mt-12 max-w-2xl space-y-7 text-lg leading-8 text-zinc-400">
            <p>
              Started with "Hello World", now building full-stack applications.
            </p>

            <p>
              Computer Science graduate student exploring the intersection of
              web development, software engineering, and game development world.
            </p>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-light tracking-tight text-white">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-0">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="border-b border-white/10 py-8 first:border-t"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {area.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-zinc-400">
                {area.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}