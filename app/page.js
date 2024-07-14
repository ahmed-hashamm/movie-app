import Button from "@/components/button/buttons";
import Hero from "@/components/hero/hero";
import { PrimaryNav } from "@/components/navbars/primaryNav";
import Socials from "@/components/socials/socials";

export default function Home() {
  return (
    <main className="h-screen bg-[#111111] ">
      <PrimaryNav />
      <section className=" py-16">
        <Hero />
        <Socials />
        <Button  text={"View Full Site"} href={"/"}/>
      </section>
    </main>
  );
}
