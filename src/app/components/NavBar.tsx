import Image from "next/image";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Profile", "#profile"],
  ["Tech Stack", "#tech-stack"],
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["Now", "#now"],
  ["Contact", "#contact"],
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-lime-300/10 bg-[#070908]/70 backdrop-blur-md">
      <div className="flex h-18 items-center justify-between px-12">

        <a href="#home" className="flex items-center">
          <Image
            src="/assets/DM_Logo.png"
            alt="DM Logo"
            width={140}
            height={140}
            className="object-contain transition duration-300 hover:scale-105"
          />
        </a>

        <div className="flex items-center gap-10 text-[15px] font-medium tracking-wide text-zinc-300">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition duration-300 hover:text-lime-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}