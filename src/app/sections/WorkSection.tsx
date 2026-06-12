import Section from "@/app/components/Section";

export default function WorkSection() {
  return (
    <Section id="work">
              <h2 className="text-3xl font-bold">Work</h2>
    
              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-zinc-800 p-8">
                  <h3 className="text-2xl font-semibold">
                    Auction Platform
                  </h3>
    
                  <p className="mt-4 text-zinc-400">
                    Full-stack auction platform with authentication, bidding
                    systems, and category filtering.
                  </p>
                </div>
    
                <div className="rounded-2xl border border-zinc-800 p-8">
                  <h3 className="text-2xl font-semibold">
                    Fitness Tracker App
                  </h3>
    
                  <p className="mt-4 text-zinc-400">
                    Mobile fitness tracking application built with React Native and
                    Expo.
                  </p>
                </div>
              </div>
          </Section>
    )
}    