import { About } from "@/components/sections/about";
import { Audiences } from "@/components/sections/audiences";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Enquiry } from "@/components/sections/enquiry";
import { FAQ } from "@/components/sections/faq";
import { FloatingActions } from "@/components/sections/floating-actions";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Proof } from "@/components/sections/proof";
import { Steps } from "@/components/sections/steps";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Audiences />
        <Benefits />
        <Steps />
        <Proof />
        <About />
        <FAQ />
        <Enquiry />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
