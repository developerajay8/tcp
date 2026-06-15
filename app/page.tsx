import Image from "next/image";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import CaseStudy from "./components/casestudy";
import PackagesSection from "./components/packagessection";
import Workflow from "./components/workflow";
import CTASection from "./components/ctasections";
import Footer from "./components/footer";
import VideoGallery from "./components/videogallery";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <CaseStudy/>
      <VideoGallery/>
      <PackagesSection/>
      <Workflow/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
