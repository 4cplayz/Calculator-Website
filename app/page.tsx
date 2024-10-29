import CenterContainer from "@/components/container/CenterContainer";
import Calculator from "@/components/sections/Calculator";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() { 
  return ( 
    <main> 
      <CenterContainer center items>
        <Hero />
        <Calculator/>
        <Footer />         
      </CenterContainer>
    </main>
  );
}
