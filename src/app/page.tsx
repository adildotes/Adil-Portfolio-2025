import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Adil",
  description: "I am a Passionate Software Developer",
  ogImage: "https://adil.wedotes.com/og-image.png",
  url: "https://adil.wedotes.com",
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-24 py-12">

      {/* TOP CONTENT */}
      <FramerWrapper
        className="flex flex-col items-center justify-center text-center gap-6 max-w-3xl"
        y={0}
        x={-50}
      >
        <HeroTexts />
        <div className="flex justify-center gap-4 flex-wrap">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* IMAGE BELOW CONTENT */}
      <FramerWrapper
        className="mt-12 flex justify-center items-center w-full"
        y={0}
        x={50}
      >
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON (FLOATING / FIXED) */}
      <GithubBtn />
    </section>
  );
}
