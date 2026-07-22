import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { RequestSection } from "@/components/RequestSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <RequestSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
