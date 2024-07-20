import Button from "@/components/buttons/primaryButton";
import Footer from "@/components/footers/landingPageFooter";
import Hero from "@/components/hero/hero";
import Intro from "@/components/introduction/intro";
import { LandingPageNav } from "@/components/navbars/landingPageNav";
import OtherSites from "@/components/otherSites/otherSites";
import Socials from "@/components/socials/socials";

export default function Home() {
  return (
    <main className=" bg-[#111111] space-y-6 h-max">
      <LandingPageNav />
      <Hero />
      <div className="space-y-2 ">
      <Socials />
      <Button text={"View Full Site"} href={"/"} />
      </div>
      <Intro />
      <OtherSites/>
      <Button text={"Go To AndyDay"} href={"/"} />
      <Footer/>
    </main>
  );
}
