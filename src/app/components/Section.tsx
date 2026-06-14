export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="h-[100dvh] shrink-0 snap-start">
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 pt-[72px]">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}