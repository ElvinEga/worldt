import { Button } from "@/components/ui/button";
import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Destinations_3 } from "../../../components/Destinations";
import React from "react";

export default function Destination1() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails></HeroDetails>

          <Destinations_3 />
        </div>
      </LandingLayout>
    </main>
  );
}
