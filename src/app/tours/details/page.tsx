import { Button } from "@/components/ui/button";
import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import CountryTable from "../../../components/CountryTable";
import { Card } from "../../../components/ui/card";
import { CheckCircle, File } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Destination1() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Tour"></HeroDetails>
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

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Included And Excluded
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      <CountryTable />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Tour Plan
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
                <Card className="mt-8 start-0 py-8 lg:px-8">
                  <div>
                    <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                      Book This Tour
                    </h3>
                    <div className="text-start  items-center space-y-6">
                      <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          type="text"
                          id="destination"
                          placeholder="New York, USA"
                        />
                      </div>
                      <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Label htmlFor="checkin">Check in</Label>
                        <Input
                          type="date"
                          id="checkin"
                          placeholder="MM/ DD / YY"
                        />
                      </div>
                      <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Label htmlFor="checkout">Check Out</Label>
                        <Input
                          type="date"
                          id="checkout"
                          placeholder="MM/ DD / YY"
                        />
                      </div>
                      <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Label htmlFor="checkout">Travel Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Travel Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Travel Type</SelectLabel>
                              <SelectItem value="adventure">
                                Adventure Tours
                              </SelectItem>
                              <SelectItem value="city">City Tours</SelectItem>
                              <SelectItem value="couple">
                                Blueberry Tours
                              </SelectItem>
                              <SelectItem value="group">Group Tours</SelectItem>
                              <SelectItem value="weekend">
                                Weekend Tours
                              </SelectItem>
                              <SelectItem value="business">
                                Business tours
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="pt-4 sm:pt-4  sm:block sm:flex-[0_0_auto] ">
                        <Button
                          size={"lg"}
                          className="justify-center items-center text-lg w-full"
                        >
                          <CheckCircle className="size-5 mr-2" /> Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
