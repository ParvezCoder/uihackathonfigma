import AsghaardSofa from "./components/AsghaardSofa";
import Blogs from "./components/Blogs";
import HeroSection from "./components/HeroSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/SharedComponents/Footer";
import TopPics from "./components/TopPics";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <TopPics/>
    <AsghaardSofa/>
    <Blogs/>
    <InstagramSection/>
    <Footer/>
    </>
   );
}
