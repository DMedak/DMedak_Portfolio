import Section from "@/app/components/Section";

export default function ContactSection() {;
  return (
    
    <Section id="contact">

            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                Feel free to reach out if you'd like to collaborate, discuss
                projects, or just say hello.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <a 
                href="https://github.com/DMedak" 
                target="_blank" 
                className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400" 
                rel="noopener noreferrer">
                GitHub
                </a>

                <a 
                href="https://www.linkedin.com/in/dmedak/" 
                target="_blank" 
                className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400" 
                rel="noopener noreferrer">
                LinkedIn
                </a>

                <a
                href="mailto:duje.mdk@gmail.com"
                className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                Email
                </a>
            </div>
        </Section>
    )
}