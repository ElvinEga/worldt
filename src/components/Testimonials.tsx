"use client";

import React, { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogs } from "../data/content";
export const Testmonials = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true);
  }, []);
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
            WHAT CLIENT SAY'S
          </h1>
          <p className="text-lg text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {blogs.data.map((item, index) => (
                <CarouselItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex h-auto w-full">
                    <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                          " There are many variations of passages available but
                          the majority have suffered alteration in some form. "
                        </p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                          </div>
                          <div className="grow ms-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                              Josh Tyson
                            </p>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                              Product Manager | Capsule
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
