import React from "react";
import { PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Video = () => {
  return (
    <section className="container py-12">
      {/* Features */}
      <div className="mx-auto">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-medium tracking-tight text-primary md:text-4xl">
            LET'S CHECK OUR VIDEO
          </h1>
          <p className="text-lg text-muted-foreground">
            The best booking platform you can trust
          </p>
        </div>

        <Card className="items-center text-center w-full h-96">
          <div className="flex justify-center items-center size-12 bg-muted-foreground rounded-lg w-full h-full">
            <PlayCircle className="size-20" />
          </div>
        </Card>
      </div>
      {/* End Features */}
    </section>
  );
};
