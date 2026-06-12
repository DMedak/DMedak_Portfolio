import Section from "@/app/components/Section";

export default function TechStacksSection() {
  return (
        <Section id="tech-stack">
                <h2 className="text-3xl font-bold">Tech Stack</h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-zinc-800 p-6">
                    <h3 className="text-xl font-semibold text-cyan-400">
                        Frontend
                    </h3>

                    <p className="mt-4 text-zinc-400">
                        React, Next.js, Tailwind CSS, TypeScript
                    </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 p-6">
                    <h3 className="text-xl font-semibold text-cyan-400">
                        Backend
                    </h3>

                    <p className="mt-4 text-zinc-400">
                        Node.js, Express, REST APIs
                    </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 p-6">
                    <h3 className="text-xl font-semibold text-cyan-400">
                        Databases
                    </h3>

                    <p className="mt-4 text-zinc-400">
                        PostgreSQL, MongoDB, MySQL
                    </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 p-6">
                    <h3 className="text-xl font-semibold text-cyan-400">
                        Game Dev
                    </h3>

                    <p className="mt-4 text-zinc-400">
                        Unreal Engine, C++, Gameplay Systems
                    </p>
                    </div>
                </div>
            </Section>
    )
}    