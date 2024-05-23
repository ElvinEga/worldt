import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { SignupForm } from "../../../components/ui/signup";

export default function Blog() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Guides"></HeroDetails>{" "}
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="py-8 lg:pe-8">
                    <div className="space-y-5 lg:space-y-8">
                      <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                        There Are Many Variations Available
                      </h2>
                      <div className="flex items-center gap-x-5">
                        <a
                          className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200"
                          href="#"
                        >
                          Company News
                        </a>
                        <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                          January 18, 2023
                        </p>
                      </div>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        At preline, our mission has always been focused on
                        bringing openness and transparency to the design
                        process. We've always believed that by providing a space
                        where designers can share ongoing work not only empowers
                        them to make better products, it also helps them grow.
                      </p>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        We're proud to be a part of creating a more open culture
                        and to continue building a product that supports this
                        vision.
                      </p>
                      <div className="text-center">
                        <div className="grid lg:grid-cols-2 gap-3">
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            <figure className="relative w-full h-60">
                              <img
                                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Image Description"
                              />
                            </figure>
                            <figure className="relative w-full h-60">
                              <img
                                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                                src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Image Description"
                              />
                            </figure>
                          </div>
                          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                            <img
                              className="size-full absolute top-0 start-0 object-cover rounded-xl"
                              src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                              alt="Image Description"
                            />
                          </figure>
                        </div>
                        <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                          Working process
                        </span>
                      </div>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        As we've grown, we've seen how Preline has helped
                        companies such as Spotify, Microsoft, Airbnb, Facebook,
                        and Intercom bring their designers closer together to
                        create amazing things. We've also learned that when the
                        culture of sharing is brought in earlier, the better
                        teams adapt and communicate with one another.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Content */}
                {/* Sidebar */}
                <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                  <div className="sticky top-0 start-0 py-8 lg:ps-8">
                    {/* Avatar Media */}
                    <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
                      <a className="block flex-shrink-0" href="#">
                        <img
                          className="size-10 rounded-full"
                          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </a>
                      <a className="group grow block" href="">
                        <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                          Leyla Ludic
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                          UI/UX enthusiast
                        </p>
                      </a>
                      <div className="grow">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx={9} cy={7} r={4} />
                              <line x1={19} x2={19} y1={8} y2={14} />
                              <line x1={22} x2={16} y1={11} y2={11} />
                            </svg>
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Avatar Media */}
                    <div className="space-y-6">
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            t is a long established fact that a reader
                          </span>
                        </div>
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="Image Description"
                          />
                        </div>
                      </a>
                      {/* End Media */}
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            t is a long established fact that a reader
                          </span>
                        </div>
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="Image Description"
                          />
                        </div>
                      </a>
                      {/* End Media */}
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            t is a long established fact that a reader
                          </span>
                        </div>
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
