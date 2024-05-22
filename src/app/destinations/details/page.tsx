import { Button } from "@/components/ui/button";
import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import React from "react";

export default function Destination1() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails></HeroDetails>
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              {/* Content */}
              <div className="lg:col-span-2">
                <div className="py-8 lg:pe-8">
                  <div className="space-y-5 lg:space-y-8">
                    <a
                      className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500"
                      href="/"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Back
                    </a>
                    <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                      Norway Lake View
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-neutral-200">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-neutral-200">
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable.
                    </p>
                    <div className="text-center">
                      <div className="grid lg:grid-cols-2 gap-3">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                          <figure className="relative w-full h-60">
                            <img
                              className="size-full absolute top-0 start-0 object-cover rounded-xl"
                              src="/assets/img/destination/1.jpg"
                              alt="Image Description"
                            />
                          </figure>
                          <figure className="relative w-full h-60">
                            <img
                              className="size-full absolute top-0 start-0 object-cover rounded-xl"
                              src="/assets/img/destination/2.jpg"
                              alt="Image Description"
                            />
                          </figure>
                        </div>
                        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-xl"
                            src="/assets/img/destination/3.jpg"
                            alt="Image Description"
                          />
                        </figure>
                      </div>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-neutral-200">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Country Information the culture of sharing to everyone
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Content */}
              {/* Sidebar */}
              <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                <div className="sticky top-0 start-0 py-8 lg:ps-8">
                  {/* Avatar Media */}
                  <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
                    <h3 className="text-2xl font-semibold dark:text-white">
                      Featured Tours
                    </h3>
                  </div>
                  {/* End Avatar Media */}
                  <div className="space-y-6">
                    {/* Media */}
                    <a className="group flex items-center gap-x-6" href="#">
                      <div className="grow">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                          Singapore Holidays
                        </span>
                      </div>
                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-lg"
                          src="/assets/img/destination/1.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </a>
                    {/* End Media */}
                    {/* Media */}
                    <a className="group flex items-center gap-x-6" href="#">
                      <div className="grow">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                          Singapore Holidays
                        </span>
                      </div>
                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-lg"
                          src="/assets/img/destination/2.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </a>
                    {/* End Media */}
                    {/* Media */}
                    <a className="group flex items-center gap-x-6" href="#">
                      <div className="grow">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                          Singapore Holidays
                        </span>
                      </div>
                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-lg"
                          src="/assets/img/destination/3.jpg"
                          alt="Image Description"
                        />
                      </div>
                    </a>
                    {/* End Media */}
                  </div>
                </div>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </LandingLayout>
    </main>
  );
}
