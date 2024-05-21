import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { reasons } from "../data/content";
import { Users } from "lucide-react";

export const Stats = () => {
  return (
    <section className="px-72 py-12 bg-muted-foreground">
      {/* Features */}
      <div className="mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {reasons.data.map((item, index) => (
            <Card className="items-center text-center" key={index}>
              <CardHeader>
                <div className="flex justify-center items-center size-12 bg-muted-foreground rounded-lg mx-auto">
                  <Users className="flex-shrink-0 size-7 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4 font-bold text-3xl">30</CardTitle>
                <CardDescription className="font-bold text-xl">
                  + Tour Guides
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
