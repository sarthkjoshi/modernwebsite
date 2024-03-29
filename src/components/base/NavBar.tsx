"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ActionButtons from "./ActionButtons";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-10">
      <Logo />
      <nav className="hidden mt-2  md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-body rounded-3xl hover:rounded-3xl focus:outline-none focus:bg-body ">
                Use Cases
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-violet-200">
                <ul className="w-60 p-5 rounded-full">
                  <li className="m-2">Sales Outreach</li>
                  <li className="m-2">Product Marketing</li>
                  <li className="m-2">Content Marketing</li>
                  <li className="m-2">Learning & Development</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-body  hover:shadow-none rounded-3xl hover:rounded-3xl focus:bg-body">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-violet-200">
                <ul className="w-60 p-5 rounded-md ">
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
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-body hover:shadow-none rounded-3xl hover:rounded-3xl focus:bg-body">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-violet-200">
                <ul className="w-60 p-5 rounded-full">
                  <li className="m-2"> Blog</li>
                  <li className="m-2">Weekly Webinar</li>
                  <li className="m-2">Case Studies</li>
                  <li className="m-2">Help Center</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="bg-body hover:shadow-none rounded-3xl hover:rounded-3xl focus:bg-body font-medium text-[14px]">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <ActionButtons />
    </div>
  );
}
