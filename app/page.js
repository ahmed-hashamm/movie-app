import Button from "@/components/button/buttons";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Intro from "@/components/introduction/intro";
import { PrimaryNav } from "@/components/navbars/primaryNav";
import OtherSites from "@/components/otherSites/otherSites";
import Socials from "@/components/socials/socials";

export default function Home() {
  return (
    <main className=" bg-[#111111] space-y-6 h-max">
      <PrimaryNav />
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
