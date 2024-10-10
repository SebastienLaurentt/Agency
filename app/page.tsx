import Business from "./sections/Business";
import CaseStudies from "./sections/CaseStudies";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Business />
      <Testimonials />
      <CaseStudies />
    </main>
  );
}
