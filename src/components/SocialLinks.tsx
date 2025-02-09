import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Instagram } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

//Adil

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/its.adildotes/", icon: <Facebook /> },
    { name: "Twitter", link: "https://twitter.com/adildotes", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/adildotes/", icon: <Linkedin /> },
    { name: "Instagram", link: "https://www.instagram.com/mr_adildotes/", icon: <Instagram /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

            <Link target="blank"
              href={itm.link}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
