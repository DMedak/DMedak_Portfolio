export default function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
        <section id={id} className="min-h-screen scroll-mt-24">
            <div className="mx-auto max-w-6xl px-6 py-24">
                {children}
            </div>
        </section>
  );
}