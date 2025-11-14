import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/hero";
import Technologies from "@/components/sections/technologies";
import Projects from "@/components/sections/projects";
import Experiance from "@/components/sections/experiance";
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <Hero />
          <Experiance />
          <Technologies />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
