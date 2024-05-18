import { Button } from "@/components/ui/button";
import LandingLayout from "../components/layout/Landing";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <Hero></Hero>
      </LandingLayout>
    </main>
  );
}
