import CompanyLogos from "../components/CompanyLogos";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import SlideSection from "../sections/SlideSection";
import TransferAndPaymentsFeture from "../sections/TransferAndPaymentsFeture";

function Home() {
  
    return (
      <>
        <Hero/>
        <CompanyLogos/>
        <Features />
        <SlideSection/>
        <TransferAndPaymentsFeture/>
      </>
    )
  }
  
  export default Home