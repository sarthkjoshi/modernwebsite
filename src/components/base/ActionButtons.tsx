import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-3 ">
      <div className=" md:flex items-center space-x-4">
        <Button
          variant="ghost"
          className="hidden md:block bg-body rounded-3xl hover:rounded-3xl hover:bg-violet-200 "
        >
          Contact Sales
        </Button>
        <Button className="">Get started</Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify className="bg-gray-300 rounded-md p-1 w-9 h-9 mt-1" />
          </SheetTrigger>
          <SheetContent side={"top"} className="bg-violet-200">
            <SheetHeader>
              <SheetDescription>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="hover:no-underline justify-normal">
                      Use Cases
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col items-start ">
                        <li className="m-2">Sales Outreach</li>
                        <li className="m-2">Product Marketing</li>
                        <li className="m-2">Content Marketing</li>
                        <li className="m-2">Learning & Development</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="hover:no-underline justify-normal">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col items-start">
                        <li className="m-2"> Instant Avatar</li>
                        <li className="m-2">Studio Avatar</li>
                        <li className="m-2">Video Translate</li>
                        <li className="m-2">Voice Cloning</li>
                        <li className="m-2">Photo Avatar</li>
                        <li className="m-2">AI Voices</li>
                        <li className="m-2">Photo Avatar</li>
                        <li className="m-2">Personalized Video</li>
                        <li className="m-2">Streaming Avatar</li>
                        <li className="m-2">AI Avatars</li>
                        <li className="m-2">Templates</li>
                        <li className="m-2"> Templates</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="hover:no-underline justify-normal">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col items-start">
                        <li className="m-2"> Blog</li>
                        <li className="m-2">Weekly Webinar</li>
                        <li className="m-2">Case Studies</li>
                        <li className="m-2">Help Center</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex py-4 font-medium">
                  <Link href="#">Pricing</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
