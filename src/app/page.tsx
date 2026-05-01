import { PhoneForwarded } from "lucide-react";
import Footer from "./_components/footer";
import About from "./_components/about";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />

      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-700 p-4 rounded-full text-white shadow-2xl hover:bg-emerald-800 transition-all hover:scale-110 animate-bounce md:animate-none md:hover:animate-pulse"
        aria-label="Contato"
      >
        <PhoneForwarded className="h-6 w-6" />
      </button>
    </main>
  );
}
