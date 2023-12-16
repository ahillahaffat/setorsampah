import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Camp from "@/components/home/Camp";
import Features from "@/components/home/Features";
import TrashHome from "@/components/home/trash-home";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Camp />
      <Features />
      <TrashHome/>
      <Footer/>
    </main>
  )
}