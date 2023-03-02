import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Stats from "@/app/components/Stats"
import Brands from "@/app/components/Brands"
import Services from "@/app/components/Services"
import Features from "@/app/components/Features"
import FeaturesCards from "@/app/components/FeaturesCards"
import Team from "@/app/components/Team"
import News from "@/app/components/News"
import Collection from "./components/Collection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Stats />
      <Brands />
      <Services />
      <Features />
      <FeaturesCards />
      <Team />
      <News />
      <Collection />
      <Footer />
    </main>
  )
}
